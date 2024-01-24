import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, EMPTY, Observable, of, switchMap} from "rxjs";
import {IProgress} from "../../models/progress/progress.model";
import {UserService} from "../user/user.service";


@Injectable({
  providedIn: 'root'
})
export class ProgressDataService {
  private readonly _progressDataApi: string = '/api/progress';

  private _httpClient: HttpClient = inject(HttpClient);
  private _userService: UserService = inject(UserService);

  progressPercentageSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  progressPercentage$: Observable<number> = this.progressPercentageSubject.asObservable();

  constructor() { }

  getUserProgress$(): Observable<IProgress> {
    return this._userService.user$.pipe(
      switchMap(user => {
        if (user && user.uid) {
          return this._fetchUserProgressData$(user.uid);
        } else {
          return EMPTY;
        }
      })
    );
  }

  private _fetchUserProgressData$(userId: string): Observable<IProgress> {
    return this._httpClient.get<IProgress>(this._progressDataApi);
  }
}
