import {ChangeDetectionStrategy, Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {ITutorial} from "../../../../../core/models/learning-path/tutorial.model";
import {ActivatedRoute, ParamMap, RouterLink} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";
import {map, Observable, Subscription} from "rxjs";
import {LearningProgressService} from "../../../../../core/services/progress/learning-progress.service";
import {LearningPathService} from "../../../../../core/services/learning-path/learning-path.service";

@Component({
  selector: 'lsbf-tutorial-playlist-item',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgClass
  ],
  templateUrl: './tutorial-playlist-item.component.html',
  styleUrl: './tutorial-playlist-item.component.css'
})
export class TutorialPlaylistItemComponent implements OnInit, OnDestroy {
  @Input() tutorial: ITutorial | undefined;

  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private _learningProgressService: LearningProgressService = inject(LearningProgressService);

  private _activatedRouteSubscription: Subscription | undefined;
  private _learningProgressSubscription: Subscription | undefined;

  isCurrentlyPlaying: boolean = false;

  get isCompleted(): boolean {
    return this.tutorial ? this._learningProgressService.isTutorialCompleted(this.tutorial.id) : false;
  }

  ngOnInit(): void {
    this._subscribeToActivatedRouteToCheckIfCurrentlyPlaying();
  }

  ngOnDestroy(): void {
    this._activatedRouteSubscription?.unsubscribe();
    this._learningProgressSubscription?.unsubscribe();
  }

  private _subscribeToActivatedRouteToCheckIfCurrentlyPlaying(): void {
    this._activatedRouteSubscription = this._activatedRoute.paramMap.pipe(
      map(params => params.get('tutorialId'))
    ).subscribe(tutorialIdStr => {
      if (tutorialIdStr != null && this.tutorial) {
        const tutorialIdInt: number = parseInt(tutorialIdStr, 10);
        this.isCurrentlyPlaying =  tutorialIdInt === this.tutorial.id;
      }
    });
  }
}
