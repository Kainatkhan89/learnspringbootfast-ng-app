import {Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, of, Subscription} from "rxjs";
import {TutorialService} from "../../../core/services/tutorial/tutorial.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ITutorial} from "../../../core/models/learning-path/tutorial.model";
import {AsyncPipe, NgClass, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {AlertPanelComponent} from "../../../shared/alert-panel/alert-panel.component";
import {LoadingSpinnerComponent} from "../../../shared/loading-spinner/loading-spinner.component";
import {VideoPlayerService} from "../../../core/services/video-player/video-player.service";
import {ProgressDataService} from "../../../core/services/progress/progress-data.service";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {animate, style, transition, trigger} from "@angular/animations";
import {PercentageFormatPipe} from "../../../core/pipes/percentage-format/percentage-format.pipe";

@Component({
  selector: 'lsbf-video-player',
  standalone: true,
  imports: [
    NgIf,
    AlertPanelComponent,
    LoadingSpinnerComponent,
    AsyncPipe,
    PercentageFormatPipe,
    RouterLink,
    ReactiveFormsModule,
    NgClass,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css',
  animations: [
    trigger("playerControlsAnimation", [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({  opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
  @ViewChild("videoElementRef") videoElementRef: ElementRef<HTMLVideoElement> | undefined;

  // private _tutorialService: TutorialService = inject(TutorialService);
  private _videoPlayerService: VideoPlayerService = inject(VideoPlayerService);
  private _progressDataService: ProgressDataService = inject(ProgressDataService);
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private _router: Router = inject(Router);

  private _activatedRouteSubscription: Subscription | undefined;
  private _getTutorialSubscription: Subscription | undefined;
  private _volumeSliderSubscription: Subscription | undefined;
  private _learningPathProgressSubscription: Subscription | undefined;
  private _hidePlayerControlsTimerId: number = 0;

  currentTutorial: ITutorial | undefined;
  isLoading: boolean = true;
  errorOccurred: boolean = false;

  showPlayerControls: boolean = true;
  showPlaybackRateMenu: boolean = false;
  videoProgressPercentage: number = 0;

  volumeSliderControl: FormControl = new FormControl(75);
  learningPathProgress: number = 0;

  private _volumeLevel: number = 75;

  ngOnInit(): void {
    this._subscribeToGetTutorialFromActivatededRouteData$();
    this._subscribeToVolumeSliderValueChange();
    this._subscribeToLearningPathProgress();
  }

  ngOnDestroy(): void {
    this._activatedRouteSubscription?.unsubscribe();
    this._getTutorialSubscription?.unsubscribe();
    this._volumeSliderSubscription?.unsubscribe();
    this._learningPathProgressSubscription?.unsubscribe();
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
    return this.videoElement ? this.videoElement.playbackRate : 1;
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

  get isFirstTutorial(): boolean {
    return false;
  }

  get isLastTutorial(): boolean {
    return false;
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

  setPlaybackRate(rate: number): void {
    this.playbackRate = rate;
    this.showPlaybackRateMenu = false;
  }

  togglePlaybackRateMenu(): void {
    this.showPlaybackRateMenu = !this.showPlaybackRateMenu;
  }

  updateVideoProgressOnCurrentTimeUpdate(): void {
    this.videoProgressPercentage = (this.currentPlaybackTime / this.videoDuration) * 100;
  }

  handleVideoProgressBarClick(event: MouseEvent): void {
    this._seekVideoOnClickEventLocation(event);
  }

  handleVideoEnd(): void {
    console.log('video ended, can navigate to next tutorial and mark current tutorial as done');
  }

  goFullscreen(): void {
    if (this.videoElement) this.videoElement.requestFullscreen();
  }

  handleAlertClose() {
    this.errorOccurred = false;
    this._router.navigate(['/home']);
  }

  private _subscribeToGetTutorialFromActivatededRouteData$(): void {
    // this._activatedRouteSubscription = this._activatedRoute.paramMap.subscribe(params => {
    //   const tutorialIdStr: string | null = params.get('tutorialId');
    //   const tutorialId: number | null = tutorialIdStr ? parseInt(tutorialIdStr, 10) : null;
    //
    //   this._getTutorialSubscription?.unsubscribe();
    //
    //   if (tutorialId != null) {
    //     this._getTutorialSubscription = this._tutorialService.getTutorialById$(tutorialId).subscribe(value => {
    //       this.isLoading = false;
    //
    //       if (value) {
    //         this.currentTutorial = value;
    //       } else {
    //         this.errorOccurred = true;
    //       }
    //     });
    //   }
    // });
  }

  private _subscribeToVolumeSliderValueChange(): void {
    this._volumeSliderSubscription = this.volumeSliderControl.valueChanges.subscribe((value) => {
      this.volumeLevel = value;
    });
  }

  private _subscribeToLearningPathProgress(): void {
    this._learningPathProgressSubscription = this._progressDataService.progressPercentage$.subscribe(value => {
      this.learningPathProgress = value;
    })
  }

  private _convertRangeInputToVolumeLevel(inputValue: number): number {
    return inputValue / 100;
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
      this.showPlayerControls = false;
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

  private _seekVideoOnClickEventLocation(event: MouseEvent): void {
    if (this.videoElement) this.currentPlaybackTime = ((event.clientX - this.videoElement.getBoundingClientRect().left) / this.videoElement.offsetWidth) * this.videoDuration;
  }
}
