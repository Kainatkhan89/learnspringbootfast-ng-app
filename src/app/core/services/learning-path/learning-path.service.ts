import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, shareReplay, tap} from "rxjs";
import {ILearningPath} from "../../models/learning-path/learning-path.model";

@Injectable({
  providedIn: 'root'
})
export class LearningPathService {
  private readonly _learningPathApi: string = '/api/learningPath';

  private _httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  getLearningPath(): Observable<ILearningPath> {
    return this._httpClient.get<ILearningPath>(this._learningPathApi);
  }
}
