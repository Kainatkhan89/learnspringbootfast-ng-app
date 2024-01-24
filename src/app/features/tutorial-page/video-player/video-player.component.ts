import {Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {of, Subscription, switchMap, tap} from "rxjs";
import {TutorialService} from "../../../core/services/tutorial/tutorial.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ITutorial} from "../../../core/models/learning-path/tutorial.model";
import {NgIf} from "@angular/common";
import {AlertPanelComponent} from "../../../shared/alert-panel/alert-panel.component";
import {LoadingSpinnerComponent} from "../../../shared/loading-spinner/loading-spinner.component";
import {VideoPlayerService} from "../../../core/services/video-player/video-player.service";

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
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private _router: Router = inject(Router);

  private _activatedRouteSubscription: Subscription | undefined;
  private _getTutorialSubscription: Subscription | undefined;

  currentTutorial: ITutorial | undefined;
  isLoading: boolean = true;
  errorOccurred: boolean = false;

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

  handleAlertClose() {
    this.errorOccurred = false;
    this._router.navigate(['/home']);
  }
}
