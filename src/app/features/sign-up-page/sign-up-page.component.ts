import { Component } from '@angular/core';
import {SignUpFormComponent} from "./sign-up-form/sign-up-form.component";
import {LogoComponent} from "../../shared/logo/logo.component";

@Component({
  selector: 'ldnf-sign-up-page',
  standalone: true,
  imports: [
    SignUpFormComponent,
    LogoComponent
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {

}
