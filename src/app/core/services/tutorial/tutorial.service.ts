import {inject, Injectable} from '@angular/core';
import {LearningPathService} from "../learning-path/learning-path.service";
import {map, Observable, Subject} from "rxjs";
import {ITutorial} from "../../models/learning-path/tutorial.model";


@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private _learningPathService: LearningPathService = inject(LearningPathService);

  currentTutorialSubject: Subject<ITutorial> = new Subject<ITutorial>();
  currentTutorial$: Observable<ITutorial> | undefined;

  constructor() { }

  setCurrentTutorial(tutorial: ITutorial): void {
    this.currentTutorialSubject.next(tutorial);
  }

  getAllLearningPathTutorials(): Observable<ITutorial[]> {
    return this._learningPathService.getLearningPath().pipe(
      map((learningPath => {
        return learningPath.modules.flatMap(module => module.tutorials);
      }))
    );
  }
}
