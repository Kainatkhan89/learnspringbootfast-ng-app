import {Component, inject} from '@angular/core';
import {LogoComponent} from "../../../shared/logo/logo.component";
import {Auth, signOut} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'lsbf-home-page-header',
  standalone: true,
    imports: [
        LogoComponent
    ],
  templateUrl: './home-page-header.component.html',
  styleUrl: './home-page-header.component.css'
})
export class HomePageHeaderComponent {
  private _auth: Auth = inject(Auth);
  private _router: Router = inject(Router);

  handleSignOut(): void {
    signOut(this._auth).then(() => {
      this._router.navigate(['/']);
    });
  }
}
