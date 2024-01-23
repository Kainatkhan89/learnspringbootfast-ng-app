import { Component } from '@angular/core';
import {LogoComponent} from "../../shared/logo/logo.component";
import {LandingPageHeaderComponent} from "./landing-page-header/landing-page-header.component";
import {LandingPageHeroComponent} from "./landing-page-hero/landing-page-hero.component";

@Component({
  selector: 'lsbf-landing-page',
  standalone: true,
  imports: [
    LogoComponent,
    LandingPageHeaderComponent,
    LandingPageHeroComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
