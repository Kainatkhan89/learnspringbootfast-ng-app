import {Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {TutorialService} from "../../../core/services/tutorial/tutorial.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'lsbf-video-player',
  standalone: true,
  imports: [],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
  @ViewChild("videoElementRef") videoElementRef: ElementRef<HTMLVideoElement> | undefined;

  private _tutorialService: TutorialService = inject(TutorialService);
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  private _activatedRouteSubscription: Subscription | undefined;

  ngOnInit(): void {
    this._subscribeToActivatedRoute$();
  }

  ngOnDestroy(): void {
    this._activatedRouteSubscription?.unsubscribe();
  }

  get videoElement(): HTMLVideoElement | undefined {
    return this.videoElementRef?.nativeElement;
  }

  private _subscribeToActivatedRoute$(): void {
    this._activatedRouteSubscription = this._activatedRoute.params.subscribe(params => {
      console.log(params['tutorialId']);
    });
  }
}
