import {ChangeDetectionStrategy, Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {ITutorial} from "../../../../../core/models/learning-path/tutorial.model";
import {ActivatedRoute, ParamMap, RouterLink} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";
import {map, Observable, Subscription} from "rxjs";

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
  private _activatedRouteSubscription: Subscription | undefined;

  isCurrentlyPlaying: boolean = false;

  ngOnInit(): void {
    this._activatedRouteSubscription = this._activatedRoute.paramMap.pipe(
      map(params => params.get('tutorialId'))
    ).subscribe(tutorialIdStr => {
      if (tutorialIdStr != null && this.tutorial) {
        const tutorialIdInt: number = parseInt(tutorialIdStr, 10);
        this.isCurrentlyPlaying =  tutorialIdInt === this.tutorial.id;
      }
    });
  }

  ngOnDestroy(): void {
    this._activatedRouteSubscription?.unsubscribe();
  }
}
