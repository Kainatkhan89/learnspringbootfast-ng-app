import { Component } from '@angular/core';
import {LogoComponent} from "../../shared/logo/logo.component";
import {SignInFormComponent} from "./sign-in-form/sign-in-form.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'lsbf-sign-in-page',
  standalone: true,
    imports: [
        LogoComponent,
        SignInFormComponent,
        RouterLink
    ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.css'
})
export class SignInPageComponent {

}
