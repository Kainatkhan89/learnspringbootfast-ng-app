import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {UserService} from "../services/user/user.service";
import {inject} from "@angular/core";
import {map, Observable, take} from "rxjs";

export const signedInGuard: CanActivateFn = (): Observable<boolean | UrlTree> => {
  const router: Router = inject(Router);
  const userService: UserService = inject(UserService);

  return userService.user$.pipe(
    take(1),
    map(user => {
      if (user) {
        return true;
      } else {
        return router.createUrlTree(['/sign-in']);
      }
    })
  );
};
