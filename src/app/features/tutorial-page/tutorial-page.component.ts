import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LoadingSpinnerComponent} from "../../shared/loading-spinner/loading-spinner.component";
import {NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {VideoPlayerComponent} from "./video-player/video-player.component";
import {UserLearningDataService} from "../../core/services/user-learning-data/user-learning-data.service";
import {ILearningPath} from "../../core/models/learning-path/learning-path.model";
import {TutorialPlaylistComponent} from "./tutorial-playlist/tutorial-playlist.component";

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
    TutorialPlaylistComponent
  ],
  templateUrl: './tutorial-page.component.html',
  styleUrl: './tutorial-page.component.css'
})
export class TutorialPageComponent implements OnInit, OnDestroy {
  private _userLearningDataService: UserLearningDataService = inject(UserLearningDataService);
  private _userLearningDataSubscription: Subscription | undefined;

  userLearningData: ILearningPath | undefined;

  ngOnInit(): void {
    this._subscribeToUserLearningData$();
  }

  ngOnDestroy(): void {
     this._userLearningDataSubscription?.unsubscribe();
  }

  private _subscribeToUserLearningData$(): void {
    this._userLearningDataSubscription = this._userLearningDataService.userLearningData$?.subscribe(value => {
      this.userLearningData = value;
    });
  }
}
