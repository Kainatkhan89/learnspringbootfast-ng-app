import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {
  private _showTutorialsPlaylistSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showTutorialsPlaylist$: Observable<boolean> = this._showTutorialsPlaylistSubject.asObservable();

  constructor() { }

  showTutorialsPlaylist(): void {
    this._showTutorialsPlaylistSubject.next(true);
  }

  closeTutorialsPlaylist(): void {
    this._showTutorialsPlaylistSubject.next(false);
  }
}
