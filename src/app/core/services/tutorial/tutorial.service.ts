import {inject, Injectable} from '@angular/core';
import {LearningPathService} from "../learning-path/learning-path.service";
import {map, Observable} from "rxjs";
import {ITutorial} from "../../models/learning-path/tutorial.model";
import {ITutorialPageViewModel} from "../../models/view-models/tutorial-page-view.model";


@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private _learningPathService: LearningPathService = inject(LearningPathService);

  constructor() { }

  getAllTutorials$(): Observable<ITutorial[]> {
    return this._getAllLearningPathTutorials$();
  }

  getTutorialPageData$(tutorialId: number): Observable<ITutorialPageViewModel | null> {
    return this._getAllLearningPathTutorials$().pipe(
      map(tutorials =>  {
        return this._getTutorialPageData(tutorialId, tutorials);
      })
    );
  }

  getNextTutorialId$(currentTutorialId: number): Observable<number | null> {
    return this._getAllLearningPathTutorials$().pipe(
      map(tutorials => {
        const currentIndex = tutorials.findIndex(tutorial => tutorial.id === currentTutorialId);
        if (currentIndex === -1 || currentIndex >= tutorials.length - 1) {
          return null;
        }
        return tutorials[currentIndex + 1].id;
      })
    );
  }

  private _getTutorialPageData(forTutorialId: number, allTutorials: ITutorial[]): ITutorialPageViewModel | null {
    const currentTutorial: ITutorial | null = allTutorials.find(tutorial => tutorial.id === forTutorialId) || null;
    if (currentTutorial === null) {
      return null;
    }

    const currentTutorialIndex: number = allTutorials.indexOf(currentTutorial);
    let nextTutorialId: number | undefined = undefined;
    let previousTutorialId: number | undefined = undefined;

    if (currentTutorialIndex < allTutorials.length - 1) {
      nextTutorialId = allTutorials[currentTutorialIndex + 1].id;
    }

    if (currentTutorialIndex > 0) {
      previousTutorialId = allTutorials[currentTutorialIndex - 1].id;
    }

    return { currentTutorial, nextTutorialId, previousTutorialId };
  }

  private _getAllLearningPathTutorials$(): Observable<ITutorial[]> {
    return this._learningPathService.getLearningPath$().pipe(
      map((learningPath => {
        return learningPath.modules.flatMap(module => module.tutorials);
      }))
    );
  }
}
