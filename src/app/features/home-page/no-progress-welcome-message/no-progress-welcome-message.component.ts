import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {WavingHandComponent} from "../../../shared/icons/waving-hand/waving-hand.component";

@Component({
  selector: 'ldnf-no-progress-welcome-message',
  standalone: true,
  imports: [
    RouterLink,
    WavingHandComponent
  ],
  templateUrl: './no-progress-welcome-message.component.html',
  styleUrl: './no-progress-welcome-message.component.css'
})
export class NoProgressWelcomeMessageComponent {

}
