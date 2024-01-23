import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {LogoComponent} from "../../shared/logo/logo.component";
import {HomePageHeaderComponent} from "./home-page-header/home-page-header.component";
import {HomePageProgressCardComponent} from "./home-page-progress-card/home-page-progress-card.component";
import {LearningPathService} from "../../core/services/learning-path/learning-path.service";
import {ILearningPath} from "../../core/models/learning-path/learning-path.model";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {defaultIfEmpty, Observable, of, Subscription} from "rxjs";
import {LoadingSpinnerComponent} from "../../shared/loading-spinner/loading-spinner.component";
import {HomePageFooterComponent} from "./home-page-footer/home-page-footer.component";
import {HomePageLearningPathComponent} from "./home-page-learning-path/home-page-learning-path.component";
import {AlertPanelComponent} from "../../shared/alert-panel/alert-panel.component";
import {UserService} from "../../core/services/user/user.service";
import {ProgressDataService} from "../../core/services/progress/progress-data.service";
import {UserLearningDataService} from "../../core/services/user-learning-data/user-learning-data.service";
import {ITutorial} from "../../core/models/learning-path/tutorial.model";

@Component({
  selector: 'ldnf-home-page',
  standalone: true,
  imports: [
    LogoComponent,
    HomePageHeaderComponent,
    HomePageProgressCardComponent,
    NgIf,
    NgForOf,
    LoadingSpinnerComponent,
    HomePageFooterComponent,
    HomePageLearningPathComponent,
    AlertPanelComponent,
    AsyncPipe
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit, OnDestroy {
  private _userLearningDataService: UserLearningDataService = inject(UserLearningDataService);
  private _progressDataService: ProgressDataService = inject(ProgressDataService);

  private _userLearningDataSubscription: Subscription | undefined;
  private _progressPercentageSubscription: Subscription | undefined;
  private _lastCompletedTutorialSubscription: Subscription | undefined;

  learningPath: ILearningPath | undefined;
  progressPercentage: number | undefined;
  lastCompletedTutorial: ITutorial | undefined | null;

  isLoading: boolean = true;
  errorOccurred: boolean = false;

  get firstTutorial(): ITutorial | undefined {
    return this.learningPath?.modules[0].tutorials[0];
  }

  ngOnInit(): void {
    this._userLearningDataSubscription = this._subscribeToUserLearningData();
    this._progressPercentageSubscription = this._subscribeToProgressPercentage();
    this._lastCompletedTutorialSubscription = this._subscribeToLastCompletedTutorial();
  }

  ngOnDestroy(): void {
    this._userLearningDataSubscription?.unsubscribe();
    this._progressPercentageSubscription?.unsubscribe();
    this._lastCompletedTutorialSubscription?.unsubscribe();
  }

  private _subscribeToUserLearningData(): Subscription | undefined {
    return this._userLearningDataService.userLearningData$?.subscribe({
      next: (data) => {
        this.learningPath = data
        this.isLoading = false;
      },
      error: () => {
        this.errorOccurred = true;
        this.isLoading = false;
      }
    })
  }

  private _subscribeToProgressPercentage(): Subscription | undefined {
    return this._progressDataService.progressPercentage$.subscribe((value) => this.progressPercentage = value);
  }

  private _subscribeToLastCompletedTutorial(): Subscription | undefined {
    return this._userLearningDataService.lastCompletedTutorial$?.subscribe(tutorial => this.lastCompletedTutorial = tutorial);
  }

  handleAlertClose() {
    this.errorOccurred = false;
  }
}