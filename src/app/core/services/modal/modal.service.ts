import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _displayModalSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  get displayModal$(): Observable<boolean> {
    return this._displayModalSubject.asObservable();
  }

  showModal(): void {
    this._displayModalSubject.next(true);
  }

  hideModal(): void {
    this._displayModalSubject.next(false);
  }
}
