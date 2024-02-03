import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NoProgressWelcomeMessageComponent} from "../no-progress-welcome-message/no-progress-welcome-message.component";
import {NgIf} from "@angular/common";
import {
  ResumeProgressWelcomeMessageComponent
} from "../resume-progress-welcome-message/resume-progress-welcome-message.component";
import {ITutorial} from "../../../core/models/learning-path/tutorial.model";
import {PercentageFormatPipe} from "../../../core/pipes/percentage-format/percentage-format.pipe";
import {LearningProgressService} from "../../../core/services/progress/learning-progress.service";
import {Subscription} from "rxjs";

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
export class HomePageProgressCardComponent implements OnInit, OnDestroy {
  readonly RADIUS: number = 120;
  readonly CIRCUMFERENCE: number = 2 * 22 / 7 * this.RADIUS;

  private _learningProgressService: LearningProgressService = inject(LearningProgressService);

  private _progressCardDataSubscription: Subscription | undefined;

  percentageProgress: number | undefined;
  lastCompletedTutorial: ITutorial | undefined;
  tutorialToResumeFrom: ITutorial | undefined;

  ngOnInit(): void {
    this._subscribeToProgressCardData$();
  }

  ngOnDestroy(): void {
    this._progressCardDataSubscription?.unsubscribe();
  }

  get progressStrokeOffset(): number {
    return this.percentageProgress ? this.CIRCUMFERENCE - this.percentageProgress / 100 * this.CIRCUMFERENCE : this.CIRCUMFERENCE;
  }

  private _subscribeToProgressCardData$(): void {
    this._progressCardDataSubscription = this._learningProgressService.getProgressCardData$().subscribe(progressCardData => {
      this.percentageProgress = progressCardData.percentageProgress;
      this.tutorialToResumeFrom = progressCardData.tutorialToResumeFrom;
      this.lastCompletedTutorial = progressCardData.lastCompletedTutorial;
    });
  }
}
