import {Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {of, Subscription, switchMap, tap} from "rxjs";
import {TutorialService} from "../../../core/services/tutorial/tutorial.service";
import {ActivatedRoute} from "@angular/router";
import {ITutorial} from "../../../core/models/learning-path/tutorial.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'lsbf-video-player',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
  @ViewChild("videoElementRef") videoElementRef: ElementRef<HTMLVideoElement> | undefined;

  private _tutorialService: TutorialService = inject(TutorialService);
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  private _activatedRouteSubscription: Subscription | undefined;
  private _getTutorialSubscription: Subscription | undefined;

  currentTutorial: ITutorial | undefined;

  ngOnInit(): void {
    this._subscribeToActivatedRouteAndTutorialService$();
  }

  ngOnDestroy(): void {
    this._activatedRouteSubscription?.unsubscribe();
    this._getTutorialSubscription?.unsubscribe();
  }

  get videoElement(): HTMLVideoElement | undefined {
    return this.videoElementRef?.nativeElement;
  }

  private _subscribeToActivatedRouteAndTutorialService$(): void {
    this._activatedRouteSubscription = this._activatedRoute.paramMap.subscribe(params => {
      const tutorialIdStr: string | null = params.get('tutorialId');

      this._getTutorialSubscription?.unsubscribe();

      if (tutorialIdStr) {
        this._getTutorialSubscription = this._tutorialService.getTutorialById(+tutorialIdStr).subscribe(tutorial => {
          if (tutorial) this.currentTutorial = tutorial;
        });
      }
    });
  }
}
