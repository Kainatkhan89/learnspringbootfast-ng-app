import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {WavingHandComponent} from "../../../shared/icons/waving-hand/waving-hand.component";
import {Router, RouterLink} from "@angular/router";
import {ITutorial} from "../../../core/models/learning-path/tutorial.model";
import {NgIf} from "@angular/common";
import {TutorialService} from "../../../core/services/tutorial/tutorial.service";
import {last, Subscription} from "rxjs";

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
  private _router: Router = inject(Router);

  private _nextTutorialSubscription: Subscription | undefined;

  ngOnDestroy() {
    this._nextTutorialSubscription?.unsubscribe();
  }

  navigateToNextTutorial(): void {
    if (this.lastCompletedTutorial) {
      this._nextTutorialSubscription = this._tutorialService.getNextTutorial$(this.lastCompletedTutorial.id).subscribe(nextTutorial => {
        if (nextTutorial) {
          this._router.navigate(['/tutorials', nextTutorial.id]);
        }
      });
    }
  }

  showResetProgressModal(): void {
    // TODO: Implement reset progress modal
  }
}
