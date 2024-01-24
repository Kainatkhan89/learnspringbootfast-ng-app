import {Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TutorialService} from "../../core/services/tutorial/tutorial.service";
import {Subscription} from "rxjs";
import {ITutorial} from "../../core/models/learning-path/tutorial.model";
import {LoadingSpinnerComponent} from "../../shared/loading-spinner/loading-spinner.component";
import {NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {VideoPlayerComponent} from "./video-player/video-player.component";
import {UserLearningDataService} from "../../core/services/user-learning-data/user-learning-data.service";
import {ILearningPath} from "../../core/models/learning-path/learning-path.model";
import {user} from "@angular/fire/auth";

@Component({
  selector: 'lsbf-tutorial-page',
  standalone: true,
  imports: [
    LoadingSpinnerComponent,
    NgSwitch,
    NgSwitchCase,
    VideoPlayerComponent,
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './tutorial-page.component.html',
  styleUrl: './tutorial-page.component.css'
})
export class TutorialPageComponent implements OnInit, OnDestroy {
  private _userLearningDataService: UserLearningDataService = inject(UserLearningDataService);
  private _tutorialService: TutorialService = inject(TutorialService);
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  private _userLearningDataSubscription: Subscription | undefined;
  private _currentTutorialSubscription: Subscription | undefined;
  private _activatedRouteSubscription: Subscription | undefined;

  userLearningData: ILearningPath | undefined;

  currentTutorial: ITutorial | undefined;

  ngOnInit(): void {
    this._subscribeToUserLearningData$();
    // this._subscribeToCurrentTutorial$();
    // this._subscribeToActivatedRoute$();
  }

  ngOnDestroy(): void {
    // this._userLearningDataSubscription?.unsubscribe();
    // this._currentTutorialSubscription?.unsubscribe();
    // this._activatedRouteSubscription?.unsubscribe();
  }

  private _subscribeToUserLearningData$(): void {
    this._userLearningDataSubscription = this._userLearningDataService.userLearningData$?.subscribe(value => {
      this.userLearningData = value;
    });
  }

  // private _subscribeToActivatedRoute$(): void {
  //   this._activatedRouteSubscription = this._activatedRoute.params.subscribe(params => {
  //     console.log(params['tutorialId']);
  //   });
  // }

  // private _subscribeToCurrentTutorial$(): void {
  //   this._currentTutorialSubscription = this._tutorialService.currentTutorial$.subscribe(value => {
  //     if (value) {
  //       this.currentTutorial = value;
  //     }
  //   });
  // }
}
