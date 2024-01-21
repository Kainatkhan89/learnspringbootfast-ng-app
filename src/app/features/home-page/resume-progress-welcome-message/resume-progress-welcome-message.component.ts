import { Component } from '@angular/core';
import {WavingHandComponent} from "../../../shared/icons/waving-hand/waving-hand.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'ldnf-resume-progress-welcome-message',
  standalone: true,
  imports: [
    WavingHandComponent,
    RouterLink
  ],
  templateUrl: './resume-progress-welcome-message.component.html',
  styleUrl: './resume-progress-welcome-message.component.css'
})
export class ResumeProgressWelcomeMessageComponent {
  showResetProgressModal(): void {
    // TODO: Implement reset progress modal
  }
}
