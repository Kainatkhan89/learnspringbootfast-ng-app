import { Component } from '@angular/core';
import {ForgotPasswordFormComponent} from "./forgot-password-form/forgot-password-form.component";
import {LogoComponent} from "../../shared/logo/logo.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'lsbf-forgot-password-page',
  standalone: true,
  imports: [
    ForgotPasswordFormComponent,
    LogoComponent,
    RouterLink
  ],
  templateUrl: './forgot-password-page.component.html',
  styleUrl: './forgot-password-page.component.css'
})
export class ForgotPasswordPageComponent {

}
