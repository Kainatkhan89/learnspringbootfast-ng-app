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

  private _localProgressData: IProgress | undefined;

  progressPercentageSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  progressPercentage$: Observable<number> = this.progressPercentageSubject.asObservable();

  getProgressPercentage$(): Observable<number> {
    return combineLatest([this._tutorialService.getAllTutorials$(), this.getUserProgress$()]).pipe(
      map(([tutorials, userProgress]) => {
        const totalTutorialsCount = tutorials.length;

        const completedTutorialsCount = tutorials.filter(tutorial =>
          userProgress.completedTutorialIds.includes(tutorial.id)).length;

        return (completedTutorialsCount / totalTutorialsCount) * 100;
      })
    );
  }

  constructor() {
    if (!this._localProgressData) {
      this.initializeLearningPathProgress();
    }
  }

  initializeLearningPathProgress(): void {

  }

  getUserProgress$(): Observable<IProgress> {
    return this._userService.user$.pipe(
      switchMap(user => {
        if (user && user.uid) {
          if (this._localProgressData) {
            return of(this._localProgressData);
          }

          return this._fetchUserProgressData$(user.uid);
        } else {
          return EMPTY;
        }
      })
    );
  }

  private _fetchUserProgressData$(userId: string): Observable<IProgress> {
    return this._httpClient.get<IProgress>(this._progressDataApi).pipe(
      tap(value => {
        this._localProgressData = value;
      })
    );
  }
}
