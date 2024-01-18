import { Component } from '@angular/core';
import {LogoComponent} from "../../shared/logo/logo.component";

@Component({
  selector: 'ldnf-home-page',
  standalone: true,
  imports: [
    LogoComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
