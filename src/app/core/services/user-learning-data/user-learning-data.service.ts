import {inject, Injectable} from '@angular/core';
import {LearningPathService} from "../learning-path/learning-path.service";
import {ProgressDataService} from "../progress/progress-data.service";
import {combineLatest, map, Observable} from "rxjs";
import {ILearningPath} from "../../models/learning-path/learning-path.model";
import {IProgress} from "../../models/progress/progress.model";

@Injectable({
  providedIn: 'root'
})
export class UserLearningDataService {
  private _learningPathService: LearningPathService = inject(LearningPathService);
  private _progressDataService: ProgressDataService = inject(ProgressDataService);

  private _learningPath$: Observable<ILearningPath>;
  private _progressData$: Observable<IProgress>;

  userLearningData$: Observable<ILearningPath> | undefined;

  constructor() {
    this._learningPath$ = this._learningPathService.getLearningPath();
    this._progressData$ = this._progressDataService.getUserProgress();

    this._initializeData();
  }

  set percentageProgress(progressPercentage: number) {
    this._progressDataService.progressPercentageSubject.next(progressPercentage);
  }

  private _initializeData(): void {
    this.userLearningData$ = combineLatest([this._learningPath$, this._progressData$]).pipe(
      map(([learningPath , progressData]) => {
        let totalTutorials: number = 0;
        let completedCount: number = 0;

        learningPath.modules = learningPath.modules.map(module => {
          module.tutorials = module.tutorials.map(tutorial => {
            totalTutorials++;

            const completed = progressData.completedTutorialIds.some(completedTutorialId => completedTutorialId === tutorial.id);
            if (completed) {
              completedCount++;
            }

            return { ...tutorial, completed };
          })

          return module;
        });

        this._publishPercentageProgress(totalTutorials, completedCount);

        return learningPath;
      })
    );
  }

  private _publishPercentageProgress(totalTutorials: number, completedCount: number): void {
    this.percentageProgress = (completedCount / totalTutorials) * 100;
  }
}
