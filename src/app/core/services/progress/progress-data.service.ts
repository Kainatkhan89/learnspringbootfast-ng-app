import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProgress} from "../../models/progress/progress.model";


@Injectable({
  providedIn: 'root'
})
export class ProgressDataService {
  private readonly _progressDataApi: string = '/api/progress';

  private _httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  getUserProgressData(userId: string): Observable<IProgress> {
    return this._httpClient.get<IProgress>(`${this._progressDataApi}/${userId}`);
  }
}
