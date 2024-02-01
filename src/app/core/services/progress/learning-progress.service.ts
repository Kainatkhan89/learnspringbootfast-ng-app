import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user/user.service";
import {TutorialService} from "../tutorial/tutorial.service";
import {BehaviorSubject, catchError, combineLatest, map, Observable, switchMap, take, tap} from "rxjs";
import {IProgress} from "../../models/progress/progress.model";


@Injectable({
  providedIn: 'root'
})
export class LearningProgressService {
  private readonly _progressDataApi: string = '/api/progress';
  private readonly _preInitializationProgressData: IProgress = { userId: '', completedTutorialIds: [] };

  private _httpClient: HttpClient = inject(HttpClient);
  private _userService: UserService = inject(UserService);
  private _tutorialService: TutorialService = inject(TutorialService);

  private _progressDataSubject: BehaviorSubject<IProgress> = new BehaviorSubject<IProgress>(this._preInitializationProgressData);

  constructor() {
    this._fetchUserProgressData();
  }

  getProgressData$(): Observable<IProgress> {
    return this._progressDataSubject.asObservable();
  }

  getPercentageProgress$(): Observable<number> {
    return combineLatest([this._tutorialService.getAllTutorials$(), this.getProgressData$()]).pipe(
      map(([allTutorials, progressData]) => {
        const tutorialsCount: number = allTutorials.length;
        const completedTutorialsCount: number = progressData.completedTutorialIds.length;

        return (completedTutorialsCount / tutorialsCount) * 100;
      })
    )
  }

  private _fetchUserProgressData(): void {
    this._userService.user$.pipe(
      take(1),
      switchMap(user => {
        if (!user || !user.uid) {
          throw new Error('User ID not found');
        }

        // return this._httpClient.get<IProgress>(`${this._progressDataApi}/${user.uid}`);
        return this._httpClient.get<IProgress>(`${this._progressDataApi}`).pipe(
          catchError((err) => { throw new Error(err) })
        )
      }),
      tap(value => {
        this._progressDataSubject.next(value);
      })
    ).subscribe(
      {
        error: err => console.error('Failed to fetch user progress data', err)
      }
    );
  }
}
