import {inject, Injectable} from '@angular/core';
import {LearningPathService} from "../learning-path/learning-path.service";
import {BehaviorSubject, catchError, map, Observable, of, Subject, tap} from "rxjs";
import {ITutorial} from "../../models/learning-path/tutorial.model";


@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private _learningPathService: LearningPathService = inject(LearningPathService);

  constructor() { }

  getAllTutorials$(): Observable<ITutorial[]> {
    return this._getAllLearningPathTutorials$();
  }



  getTutorialById$(tutorialId: number): Observable<ITutorial | null> {
    return this._getAllLearningPathTutorials$().pipe(
      map(tutorials => tutorials.find(tutorial => tutorial.id === tutorialId) || null),
      catchError(error => {
        console.error('Error fetching tutorial:', error);
        return of(null);
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

  getPreviousTutorialId$(currentTutorialId: number): Observable<number | null> {
    return this._getAllLearningPathTutorials$().pipe(
      map(tutorials => {
        const currentIndex = tutorials.findIndex(tutorial => tutorial.id === currentTutorialId);
        if (currentIndex === -1 || currentIndex >= tutorials.length - 1) {
          return null;
        }
        return tutorials[currentIndex - 1].id;
      })
    );
  }

  isFirstTutorial$(tutorialId: number): Observable<boolean> {
    return this._getAllLearningPathTutorials$().pipe(
      map(tutorials => tutorials.findIndex(tutorial => tutorial.id === tutorialId) === 0)
    );
  }

  isLastTutorial$(tutorialId: number): Observable<boolean> {
    return this._getAllLearningPathTutorials$().pipe(
      map(tutorials => {
        const index = tutorials.findIndex(tutorial => tutorial.id === tutorialId);
        return index !== -1 && index === tutorials.length - 1;
      })
    );
  }

  private _getAllLearningPathTutorials$(): Observable<ITutorial[]> {
    return this._learningPathService.getLearningPath$().pipe(
      map((learningPath => {
        return learningPath.modules.flatMap(module => module.tutorials);
      }))
    );
  }
}
