import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NoProgressWelcomeMessageComponent} from "../no-progress-welcome-message/no-progress-welcome-message.component";
import {NgIf} from "@angular/common";
import {
  ResumeProgressWelcomeMessageComponent
} from "../resume-progress-welcome-message/resume-progress-welcome-message.component";
import {ITutorial} from "../../../core/models/learning-path/tutorial.model";
import {PercentageFormatPipe} from "../../../core/pipes/percentage-format/percentage-format.pipe";

@Component({
  selector: 'lsbf-home-page-progress-card',
  standalone: true,
  imports: [
    RouterLink,
    NoProgressWelcomeMessageComponent,
    NgIf,
    ResumeProgressWelcomeMessageComponent,
    PercentageFormatPipe,
  ],
  templateUrl: './home-page-progress-card.component.html',
  styleUrl: './home-page-progress-card.component.css'
})
export class HomePageProgressCardComponent {
  readonly RADIUS: number = 120;
  readonly CIRCUMFERENCE: number = 2 * 22 / 7 * this.RADIUS;

  @Input() progressPercentage: number | undefined;
  @Input() lastCompletedTutorial: ITutorial | undefined | null;
  @Input() firstTutorial: ITutorial | undefined;

  get progressStrokeOffset(): number {
    return this.progressPercentage ? this.CIRCUMFERENCE - this.progressPercentage / 100 * this.CIRCUMFERENCE : this.CIRCUMFERENCE;
  }
}
