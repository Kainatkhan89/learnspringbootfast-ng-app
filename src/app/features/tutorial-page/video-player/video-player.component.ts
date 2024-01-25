import {Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {TutorialService} from "../../../core/services/tutorial/tutorial.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ITutorial} from "../../../core/models/learning-path/tutorial.model";
import {NgIf} from "@angular/common";
import {AlertPanelComponent} from "../../../shared/alert-panel/alert-panel.component";
import {LoadingSpinnerComponent} from "../../../shared/loading-spinner/loading-spinner.component";
import {VideoPlayerService} from "../../../core/services/video-player/video-player.service";
import {ProgressDataService} from "../../../core/services/progress/progress-data.service";

@Component({
  selector: 'lsbf-video-player',
  standalone: true,
  imports: [
    NgIf,
    AlertPanelComponent,
    LoadingSpinnerComponent
  ],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
  @ViewChild("videoElementRef") videoElementRef: ElementRef<HTMLVideoElement> | undefined;

  private _tutorialService: TutorialService = inject(TutorialService);
  private _videoPlayerService: VideoPlayerService = inject(VideoPlayerService);
  private _progressDataService: ProgressDataService = inject(ProgressDataService);
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private _router: Router = inject(Router);

  private _activatedRouteSubscription: Subscription | undefined;
  private _getTutorialSubscription: Subscription | undefined;
  private _volumeSliderSubscription: Subscription | undefined;
  private _hidePlayerControlsTimerId: number = 0;

  learningPathProgress$: Observable<number> = this._progressDataService.progressPercentage$;

  currentTutorial: ITutorial | undefined;
  isLoading: boolean = true;
  errorOccurred: boolean = false;

  showPlayerControls: boolean = true;
  // isPlaying: boolean = false;
  showPlaybackRateMenu: boolean = false;
  videoProgressPercentage: number = 0;

  private _volumeLevel: number = 75;

  ngOnInit(): void {
    this._subscribeToGetTutorialBasedOnActivatedRouteParam$();
  }

  ngOnDestroy(): void {
    this._activatedRouteSubscription?.unsubscribe();
    this._getTutorialSubscription?.unsubscribe();
  }

  get videoElement(): HTMLVideoElement | undefined {
    return this.videoElementRef?.nativeElement;
  }

  get currentPlaybackTime(): number {
    return this.videoElement ? this.videoElement.currentTime : 0;
  }

  set currentPlaybackTime(time: number) {
    if (this.videoElement) this.videoElement.currentTime = time;
  }

  get videoDuration(): number {
    return this.videoElement ? this.videoElement.duration : 0;
  }

  get playbackRate(): number {
    return this.videoElement ? this.videoElement.playbackRate : 0;
  }

  set playbackRate(rate: number) {
    if (this.videoElement) this.videoElement.playbackRate = rate;
  }

  get volumeLevel(): number {
    return this._volumeLevel;
  }

  set volumeLevel(value: number) {
    if (this.videoElement) {
      this._volumeLevel = value;
      this.videoElement.volume = this._convertRangeInputToVolumeLevel(value);
    }
  }

  get isPlaying(): boolean {
    return this.videoElement ? !this.videoElement.paused : false;
  }

  handlePlaybackToggle(): void {
    this._togglePlayback();
    this._toggleControlsDisplay();
  }

  showTutorialPlaylist(): void {
    this._videoPlayerService.showTutorialsPlaylist();
  }

  handleMouseMovement(): void {
    this.showPlayerControls = true;
    this._showMouseCursor();
    if (this.isPlaying) this._setupTimerToHideControls();
  }

  handleAlertClose() {
    this.errorOccurred = false;
    this._router.navigate(['/home']);
  }

  private _convertRangeInputToVolumeLevel(inputValue: number): number {
    return inputValue / 100;
  }

  private _subscribeToGetTutorialBasedOnActivatedRouteParam$(): void {
    this._activatedRouteSubscription = this._activatedRoute.paramMap.subscribe(params => {
      const tutorialIdStr: string | null = params.get('tutorialId');
      const tutorialId: number | null = tutorialIdStr ? parseInt(tutorialIdStr, 10) : null;

      this._getTutorialSubscription?.unsubscribe();

      if (tutorialId != null) {
        this._getTutorialSubscription = this._tutorialService.getTutorialById$(tutorialId).subscribe(value => {
          this.isLoading = false;

          if (value) {
            this.currentTutorial = value;
          } else {
            this.errorOccurred = true;
          }
        });
      }
    });
  }

  private _togglePlayback(): void {
    if (this.videoElement) {
      this.videoElement.paused ? this.videoElement.play() : this.videoElement.pause();
    }
  }

  private _toggleControlsDisplay(): void {
    this.isPlaying ? this._setupTimerToHideControls() : this._cancelExistingHideControlsTimer();
  }

  private _setupTimerToHideControls(): void {
    this._cancelExistingHideControlsTimer();

    this._hidePlayerControlsTimerId = setTimeout(() => {
      this.showPlayerControls = true;
      this._hideMouseCursor();
    }, 4000);
  }

  private _cancelExistingHideControlsTimer(): void {
    clearTimeout(this._hidePlayerControlsTimerId);
  }

  private _hideMouseCursor(): void {
    document.body.style.cursor = "none";
  }

  private _showMouseCursor(): void {
    document.body.style.cursor = "default";
  }
}
