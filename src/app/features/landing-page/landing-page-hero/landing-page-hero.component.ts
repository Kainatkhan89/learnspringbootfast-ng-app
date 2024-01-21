import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'ldnf-landing-page-hero',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './landing-page-hero.component.html',
  styleUrl: './landing-page-hero.component.css'
})
export class LandingPageHeroComponent {

}
