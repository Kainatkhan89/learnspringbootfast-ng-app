import {Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TutorialService} from "../../core/services/tutorial/tutorial.service";
import {Subscription} from "rxjs";
import {ITutorial} from "../../core/models/learning-path/tutorial.model";
import {LoadingSpinnerComponent} from "../../shared/loading-spinner/loading-spinner.component";
import {NgSwitch, NgSwitchCase} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'lsbf-tutorial-page',
  standalone: true,
  imports: [
    LoadingSpinnerComponent,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './tutorial-page.component.html',
  styleUrl: './tutorial-page.component.css'
})
export class TutorialPageComponent implements OnInit, OnDestroy {
  @ViewChild("videoElementRef") videoElementRef: ElementRef<HTMLVideoElement> | undefined;

  private _tutorialService: TutorialService = inject(TutorialService);
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  private _currentTutorialSubscription: Subscription | undefined;
  private _activatedRouteSubscription: Subscription | undefined;

  currentTutorial: ITutorial | undefined;

  ngOnInit(): void {
    this._subscribeToCurrentTutorial$();
    this._subscribeToActivatedRoute$();
  }

  ngOnDestroy(): void {
    this._currentTutorialSubscription?.unsubscribe();
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

  private _subscribeToCurrentTutorial$(): void {
    this._currentTutorialSubscription = this._tutorialService.currentTutorial$.subscribe(value => {
      if (value) {
        this.currentTutorial = value;
      }
    });
  }
}
