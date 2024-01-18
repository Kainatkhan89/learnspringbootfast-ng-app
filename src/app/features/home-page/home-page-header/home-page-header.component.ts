import { Component } from '@angular/core';
import {LogoComponent} from "../../../shared/logo/logo.component";

@Component({
  selector: 'ldnf-home-page-header',
  standalone: true,
    imports: [
        LogoComponent
    ],
  templateUrl: './home-page-header.component.html',
  styleUrl: './home-page-header.component.css'
})
export class HomePageHeaderComponent {

}
