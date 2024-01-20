import { Component } from '@angular/core';
import {LogoComponent} from "../../shared/logo/logo.component";
import {SignUpFormComponent} from "../sign-up-page/sign-up-form/sign-up-form.component";

@Component({
  selector: 'ldnf-sign-in-page',
  standalone: true,
  imports: [
    LogoComponent
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.css'
})
export class SignInPageComponent {

}
