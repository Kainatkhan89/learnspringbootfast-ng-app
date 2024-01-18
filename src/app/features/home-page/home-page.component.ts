import { Component } from '@angular/core';
import {LogoComponent} from "../../shared/logo/logo.component";
import {HomePageHeaderComponent} from "./home-page-header/home-page-header.component";

@Component({
  selector: 'ldnf-home-page',
  standalone: true,
  imports: [
    LogoComponent,
    HomePageHeaderComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
