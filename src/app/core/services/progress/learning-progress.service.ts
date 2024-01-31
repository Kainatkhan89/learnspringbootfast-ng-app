import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, combineLatest, EMPTY, map, Observable, of, switchMap, tap} from "rxjs";
import {IProgress} from "../../models/progress/progress.model";
import {UserService} from "../user/user.service";
import {TutorialService} from "../tutorial/tutorial.service";


@Injectable({
  providedIn: 'root'
})
export class LearningProgressService {
  private readonly _progressDataApi: string = '/api/progress';

  private _httpClient: HttpClient = inject(HttpClient);
  private _userService: UserService = inject(UserService);
  private _tutorialService: TutorialService = inject(TutorialService);

  private _progressData: IProgress | undefined;

  private _progressDataSubject: BehaviorSubject<IProgress> = new BehaviorSubject<IProgress>({
    userId: 'dummy_id_to_be_replaced_with_user$_data',
    completedTutorialIds: []
  });

  constructor() {}

  get userProgress$(): Observable<IProgress> {
    return this._progressDataSubject.asObservable();
  }

  getProgressPercentage$(): Observable<number> {
    return combineLatest([this._tutorialService.getAllTutorials$(), this.userProgress$]).pipe(
      map(([tutorials, userProgress]) => {
        const totalTutorialsCount = tutorials.length;

        const completedTutorialsCount = tutorials.filter(tutorial =>
          userProgress.completedTutorialIds.includes(tutorial.id)).length;

        return (completedTutorialsCount / totalTutorialsCount) * 100;
      })
    );
  }

  setTutorialAsCompleted(tutorialId: number): void {
    const currentProgress: IProgress = this._progressDataSubject.getValue();

    if (!this._alreadyCompleted(currentProgress, tutorialId)) {
      const updateDatedProgress: IProgress = {
        ...currentProgress,
        completedTutorialIds: [...currentProgress.completedTutorialIds, tutorialId]
      }

      this._progressDataSubject.next(updateDatedProgress);
    }
  }

  private _alreadyCompleted(progress: IProgress, tutorialId: number): boolean {
    return progress.completedTutorialIds.includes(tutorialId);
  }

  // getUserProgress$(): Observable<IProgress> {
  //   return this._userService.user$.pipe(
  //     switchMap(user => {
  //       if (user && user.uid) {
  //         if (this._progressData) {
  //           return of(this._progressData);
  //         }
  //
  //         return this._fetchUserProgressData$(user.uid);
  //       } else {
  //         return EMPTY;
  //       }
  //     })
  //   );
  // }
  //
  // private _fetchUserProgressData$(userId: string): Observable<IProgress> {
  //   return this._httpClient.get<IProgress>(this._progressDataApi).pipe(
  //     tap(value => {
  //       this._progressData = value;
  //     })
  //   );
  // }
}
