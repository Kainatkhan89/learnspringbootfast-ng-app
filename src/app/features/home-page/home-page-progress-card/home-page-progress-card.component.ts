import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NoProgressWelcomeMessageComponent} from "../no-progress-welcome-message/no-progress-welcome-message.component";
import {NgIf} from "@angular/common";
import {
  ResumeProgressWelcomeMessageComponent
} from "../resume-progress-welcome-message/resume-progress-welcome-message.component";

@Component({
  selector: 'ldnf-home-page-progress-card',
  standalone: true,
  imports: [
    RouterLink,
    NoProgressWelcomeMessageComponent,
    NgIf,
    ResumeProgressWelcomeMessageComponent
  ],
  templateUrl: './home-page-progress-card.component.html',
  styleUrl: './home-page-progress-card.component.css'
})
export class HomePageProgressCardComponent {
  @Input() progressPercentage: number = 10;

  readonly RADIUS: number = 120;
  readonly CIRCUMFERENCE: number = 2 * 22 / 7 * this.RADIUS;

  progressStrokeOffset: number = this.CIRCUMFERENCE - this.progressPercentage / 100 * this.CIRCUMFERENCE;
}
