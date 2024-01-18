import { Component } from '@angular/core';
import {LogoComponent} from "../../../shared/logo/logo.component";

@Component({
  selector: 'ldnf-landing-page-header',
  standalone: true,
    imports: [
        LogoComponent
    ],
  templateUrl: './landing-page-header.component.html',
  styleUrl: './landing-page-header.component.css'
})
export class LandingPageHeaderComponent {

}
