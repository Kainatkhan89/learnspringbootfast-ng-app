import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LoadingSpinnerComponent} from "../../shared/loading-spinner/loading-spinner.component";
import {NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {VideoPlayerComponent} from "./video-player/video-player.component";
import {ILearningPath} from "../../core/models/learning-path/learning-path.model";
import {TutorialPlaylistComponent} from "./tutorial-playlist/tutorial-playlist.component";
import {ITutorial} from "../../core/models/learning-path/tutorial.model";
import {AlertPanelComponent} from "../../shared/alert-panel/alert-panel.component";
import {LearningPathService} from "../../core/services/learning-path/learning-path.service";

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
    RouterLink,
    RouterOutlet,
    TutorialPlaylistComponent,
    AlertPanelComponent
  ],
  templateUrl: './tutorial-page.component.html',
  styleUrl: './tutorial-page.component.css'
})
export class TutorialPageComponent implements OnInit, OnDestroy {
  private _learningPathService: LearningPathService = inject(LearningPathService);
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private _router: Router = inject(Router);

  private _learningDataSubscription: Subscription | undefined;
  private _activatedRouteSubscription: Subscription | undefined;

  currentTutorial: ITutorial | undefined;
  userLearningData: ILearningPath | undefined;
  errorOccurred: boolean = false;

  ngOnInit(): void {
    this._subscribeToLearningData$();
    this._subscribeToGetTutorialFromActivatedRouteData$();
  }

  ngOnDestroy(): void {
     this._learningDataSubscription?.unsubscribe();
     this._activatedRouteSubscription?.unsubscribe();
  }

  handleAlertClose() {
    this.errorOccurred = false;
    this._router.navigate(['/home']);
  }

  private _subscribeToGetTutorialFromActivatedRouteData$(): void {
    this._activatedRouteSubscription = this._activatedRoute.data.subscribe(({ tutorial }) => {
      if (tutorial) {
        this.currentTutorial = tutorial;
      } else {
        this.errorOccurred = true;
      }
    });
  }

  private _subscribeToLearningData$(): void {
    this._learningDataSubscription = this._learningPathService.getLearningPath$()?.subscribe(value => {
      this.userLearningData = value;
    });
  }
}
