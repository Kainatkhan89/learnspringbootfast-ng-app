import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user/user.service";
import {TutorialService} from "../tutorial/tutorial.service";
import {BehaviorSubject, combineLatest, map, Observable, pipe, take, tap} from "rxjs";
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
    this._fetchProgressData();
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

  private _fetchProgressData(): void {
    this._httpClient.get<IProgress>(this._progressDataApi).pipe(
      take(1),
      pipe(
        tap(value => {
          this._progressDataSubject.next(value);
        })
      )
    ).subscribe();
  }
}
