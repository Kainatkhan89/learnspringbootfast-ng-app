import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {WavingHandComponent} from "../../../shared/icons/waving-hand/waving-hand.component";
import {Router, RouterLink} from "@angular/router";
import {ITutorial} from "../../../core/models/learning-path/tutorial.model";
import {NgIf} from "@angular/common";
import {TutorialService} from "../../../core/services/tutorial/tutorial.service";
import {last, Subscription} from "rxjs";
import {LearningProgressService} from "../../../core/services/progress/learning-progress.service";
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
export class ResumeProgressWelcomeMessageComponent implements OnDestroy {
  @Input() lastCompletedTutorial: ITutorial | undefined | null;
  @Input() progressPercentage: number | undefined;

  private _tutorialService: TutorialService = inject(TutorialService);
  private _modalService: ModalService = inject(ModalService);
  private _router: Router = inject(Router);

  private _nextTutorialIdSubscription: Subscription | undefined;

  ngOnDestroy() {
    this._nextTutorialIdSubscription?.unsubscribe();
  }

  navigateToNextTutorial(): void {
    if (this.lastCompletedTutorial) {
      this._nextTutorialIdSubscription = this._tutorialService.getNextTutorialId$(this.lastCompletedTutorial.id).subscribe(nextTutorialId => {
        if (nextTutorialId) {
          this._router.navigate(['/tutorials', nextTutorialId]);
        }
      });
    }
  }

  showResetProgressModal(): void {
    this._modalService.showModal();
  }
}
