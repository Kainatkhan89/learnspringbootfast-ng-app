import {Component, inject, Input} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {WavingHandComponent} from "../../../shared/icons/waving-hand/waving-hand.component";
import {ITutorial} from "../../../core/models/learning-path/tutorial.model";
import {NgIf} from "@angular/common";
import {TutorialService} from "../../../core/services/tutorial/tutorial.service";

@Component({
  selector: 'lsbf-no-progress-welcome-message',
  standalone: true,
  imports: [
    RouterLink,
    WavingHandComponent,
    NgIf
  ],
  templateUrl: './no-progress-welcome-message.component.html',
  styleUrl: './no-progress-welcome-message.component.css'
})
export class NoProgressWelcomeMessageComponent {
  @Input() firstTutorial: ITutorial | undefined;

  private _tutorialService: TutorialService = inject(TutorialService);
  private _router: Router = inject(Router);

  navigateToFirstTutorial(): void {
    if (this.firstTutorial) {
      this._tutorialService.setCurrentTutorial(this.firstTutorial);
      this._router.navigate(['/tutorial']);
    }
  }
}
