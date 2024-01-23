import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'lsbf-logo',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {

}
