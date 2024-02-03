import {Component, inject, Input} from '@angular/core';
import {WavingHandComponent} from "../../../shared/icons/waving-hand/waving-hand.component";
import {Router, RouterLink} from "@angular/router";
import {ITutorial} from "../../../core/models/learning-path/tutorial.model";
import {NgIf} from "@angular/common";
import {ModalService} from "../../../core/services/modal/modal.service";

@Component({
  selector: 'lsbf-resume-progress-welcome-message',
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
  @Input() progressPercentage: number | undefined;
  @Input() tutorialToResumeFrom: ITutorial | undefined;

  private _modalService: ModalService = inject(ModalService);
  private _router: Router = inject(Router);

  navigateToNextTutorial(): void {
    if (this.tutorialToResumeFrom) this._router.navigate(['/tutorials', this.tutorialToResumeFrom.id]);
  }

  showResetProgressModal(): void {
    this._modalService.showModal();
  }
}
