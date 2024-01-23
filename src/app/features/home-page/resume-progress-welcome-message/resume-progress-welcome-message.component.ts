import {Component, Input} from '@angular/core';
import {WavingHandComponent} from "../../../shared/icons/waving-hand/waving-hand.component";
import {RouterLink} from "@angular/router";
import {ITutorial} from "../../../core/models/learning-path/tutorial.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'ldnf-resume-progress-welcome-message',
  standalone: true,
  imports: [
    WavingHandComponent,
    RouterLink,
    NgIf
  ],
  templateUrl: './resume-progress-welcome-message.component.html',
  styleUrl: './resume-progress-welcome-message.component.css'
})
export class ResumeProgressWelcomeMessageComponent {
  @Input() lastCompletedTutorial: ITutorial | undefined | null;

  showResetProgressModal(): void {
    // TODO: Implement reset progress modal
  }
}
