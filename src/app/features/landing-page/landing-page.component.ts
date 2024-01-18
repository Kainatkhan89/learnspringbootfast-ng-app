import { Component } from '@angular/core';
import {LogoComponent} from "../../shared/logo/logo.component";

@Component({
  selector: 'ldnf-landing-page',
  standalone: true,
  imports: [
    LogoComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
