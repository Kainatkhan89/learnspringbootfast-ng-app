import {Component, ElementRef, inject, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {Router, RouterLink} from "@angular/router";
import {ITutorial} from "../../../core/models/learning-path/tutorial.model";
import {AsyncPipe, NgClass, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {AlertPanelComponent} from "../../../shared/alert-panel/alert-panel.component";
import {LoadingSpinnerComponent} from "../../../shared/loading-spinner/loading-spinner.component";
import {VideoPlayerService} from "../../../core/services/video-player/video-player.service";
import {LearningProgressService} from "../../../core/services/progress/learning-progress.service";
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
  @Input() currentTutorial: ITutorial | undefined;
  @Input() nextTutorialId: number | undefined;
  @Input() previousTutorialId: number | undefined;

  @ViewChild("videoElementRef") videoElementRef: ElementRef<HTMLVideoElement> | undefined;

  private _videoPlayerService: VideoPlayerService = inject(VideoPlayerService);
  private _learningProgressService: LearningProgressService = inject(LearningProgressService);
  private _router: Router = inject(Router);

  private _getTutorialSubscription: Subscription | undefined;
  private _volumeSliderSubscription: Subscription | undefined;
  private _learningPathProgressSubscription: Subscription | undefined;
  private _tutorialPlaylistDisplaySubscription: Subscription | undefined;
  private _hidePlayerControlsTimerId: number = 0;

  errorOccurred: boolean = false;

  showPlayerControls: boolean = true;
  showPlaybackRateMenu: boolean = false;
  videoProgressPercentage: number = 0;

  volumeSliderControl: FormControl = new FormControl(75);
  learningPathProgress: number = 0;

  private _volumeLevel: number = 75;

  ngOnInit(): void {
    this._subscribeToVolumeSliderValueChange();
    this._subscribeToLearningPathProgress();
    this._subscribeToPlaylistDisplayChange();
  }

  ngOnDestroy(): void {
    this._getTutorialSubscription?.unsubscribe();
    this._volumeSliderSubscription?.unsubscribe();
    this._learningPathProgressSubscription?.unsubscribe();
    this._tutorialPlaylistDisplaySubscription?.unsubscribe();
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

  get isCurrentTutorialCompleted(): boolean {
    return this.currentTutorial ? this._learningProgressService.isTutorialCompleted(this.currentTutorial.id) : false;
  }

  get isLastTutorial(): boolean {
    return this.nextTutorialId === undefined;
  }

  get isFirstTutorial(): boolean {
    return this.previousTutorialId === undefined;
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
    if (!this.isCurrentTutorialCompleted) this._setCurrentTutorialAsCompleted();
  }

  goFullscreen(): void {
    if (this.videoElement) this.videoElement.requestFullscreen();
  }

  toggleTutorialCompletionStatus(): void {
    this.isCurrentTutorialCompleted ? this._setCurrentTutorialAsNotCompleted() : this._setCurrentTutorialAsCompleted();
  }

  goToNextTutorial(): void {
    if (this.nextTutorialId != undefined) this._navigateToTutorial(this.nextTutorialId);
  }

  goToPreviousTutorial(): void {
    if (this.previousTutorialId != undefined) this._navigateToTutorial(this.previousTutorialId);
  }

  private _navigateToTutorial(tutorialId: number): void {
    this._router.navigate(['/tutorials', tutorialId]);
  }

  private _subscribeToVolumeSliderValueChange(): void {
    this._volumeSliderSubscription = this.volumeSliderControl.valueChanges.subscribe((value) => {
      this.volumeLevel = value;
    });
  }

  private _subscribeToLearningPathProgress(): void {
    this._learningPathProgressSubscription = this._learningProgressService.getPercentageProgress$().subscribe(value => {
      this.learningPathProgress = value;
    })
  }

  private _subscribeToPlaylistDisplayChange(): void {
    this._tutorialPlaylistDisplaySubscription = this._videoPlayerService.showTutorialsPlaylist$.subscribe((showPlaylist) => {
      this._cancelExistingHideControlsTimer();
      showPlaylist ? this.videoElement?.pause() : this.videoElement?.play();
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

  private _setCurrentTutorialAsCompleted(): void {
    if (this.currentTutorial) this._learningProgressService.setTutorialAsCompleted(this.currentTutorial.id);
  }

  private _setCurrentTutorialAsNotCompleted(): void {
    if (this.currentTutorial) this._learningProgressService.setTutorialAsNotCompleted(this.currentTutorial.id);
  }
}
