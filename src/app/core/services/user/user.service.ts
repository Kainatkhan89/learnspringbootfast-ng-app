import {inject, Injectable} from '@angular/core';
import {Auth, user, User} from "@angular/fire/auth";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _auth: Auth = inject(Auth);

  user$: Observable<User | null> = user(this._auth);

  constructor() { }
}
