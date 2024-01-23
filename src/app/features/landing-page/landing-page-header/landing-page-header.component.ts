import { Component } from '@angular/core';
import {LogoComponent} from "../../../shared/logo/logo.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'lsbf-landing-page-header',
  standalone: true,
  imports: [
    LogoComponent,
    RouterLink
  ],
  templateUrl: './landing-page-header.component.html',
  styleUrl: './landing-page-header.component.css'
})
export class LandingPageHeaderComponent {

}
