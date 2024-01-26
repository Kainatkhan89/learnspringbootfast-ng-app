import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of, tap} from "rxjs";
import {ILearningPath} from "../../models/learning-path/learning-path.model";

@Injectable({
  providedIn: 'root'
})
export class LearningPathService {
  private readonly _learningPathApi: string = '/api/learningPath';

  private _httpClient: HttpClient = inject(HttpClient);
  private _cachedLearningPathData: ILearningPath | undefined;

  constructor() { }

  getLearningPath$(): Observable<ILearningPath> {
    if (this._cachedLearningPathData) {
      return of(this._cachedLearningPathData);
    } else {
      return this._fetchLearningPath$();
    }
  }

  private _fetchLearningPath$(): Observable<ILearningPath> {
    return this._httpClient.get<ILearningPath>(this._learningPathApi).pipe(
      tap(value => {
        if (!this._cachedLearningPathData) {
          this._cachedLearningPathData = value;
        }
      }),
    );
  }

}
