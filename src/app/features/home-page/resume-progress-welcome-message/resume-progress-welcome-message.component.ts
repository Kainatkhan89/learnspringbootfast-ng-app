import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {WavingHandComponent} from "../../../shared/icons/waving-hand/waving-hand.component";

@Component({
  selector: 'ldnf-resume-progress-welcome-message',
  standalone: true,
  imports: [
    RouterLink,
    WavingHandComponent
  ],
  templateUrl: './resume-progress-welcome-message.component.html',
  styleUrl: './resume-progress-welcome-message.component.css'
})
export class ResumeProgressWelcomeMessageComponent {

  showResetProgressModal(): void {
    // TODO: Create modal and display via service
  }
}
