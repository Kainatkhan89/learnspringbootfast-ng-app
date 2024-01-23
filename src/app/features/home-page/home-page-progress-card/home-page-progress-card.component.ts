import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NoProgressWelcomeMessageComponent} from "../no-progress-welcome-message/no-progress-welcome-message.component";
import {NgIf} from "@angular/common";
import {
  ResumeProgressWelcomeMessageComponent
} from "../resume-progress-welcome-message/resume-progress-welcome-message.component";
import {ITutorial} from "../../../core/models/learning-path/tutorial.model";
import {ProgressDataService} from "../../../core/services/progress/progress-data.service";
import {Observable, of, Subscription} from "rxjs";

@Component({
  selector: 'ldnf-home-page-progress-card',
  standalone: true,
  imports: [
    RouterLink,
    NoProgressWelcomeMessageComponent,
    NgIf,
    ResumeProgressWelcomeMessageComponent,
  ],
  templateUrl: './home-page-progress-card.component.html',
  styleUrl: './home-page-progress-card.component.css'
})
export class HomePageProgressCardComponent {
  readonly RADIUS: number = 120;
  readonly CIRCUMFERENCE: number = 2 * 22 / 7 * this.RADIUS;

  @Input() progressPercentage: number = 0;
  @Input() lastCompletedTutorial: ITutorial | undefined | null;

  get progressStrokeOffset(): number {
    return this.CIRCUMFERENCE - this.progressPercentage / 100 * this.CIRCUMFERENCE;
  }
}
