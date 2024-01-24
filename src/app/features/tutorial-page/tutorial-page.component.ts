import {AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TutorialService} from "../../core/services/tutorial/tutorial.service";
import {Subscription} from "rxjs";
import {ITutorial} from "../../core/models/learning-path/tutorial.model";
import {LoadingSpinnerComponent} from "../../shared/loading-spinner/loading-spinner.component";
import {NgIf, NgSwitch, NgSwitchCase} from "@angular/common";

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
  private _currentTutorialSubscription: Subscription | undefined;

  currentTutorial: ITutorial | undefined;
  showPlayer: boolean = false;

  ngOnInit(): void {
    this._setupCurrentTutorialSubscription();
  }

  ngOnDestroy(): void {
    this._currentTutorialSubscription?.unsubscribe();
  }

  get videoElement(): HTMLVideoElement | undefined {
    return this.videoElementRef?.nativeElement;
  }

  private _setupCurrentTutorialSubscription(): void {
    this._currentTutorialSubscription = this._tutorialService.currentTutorial$.subscribe(value => {
      if (value) {
        this.currentTutorial = value;
        this.showPlayer = true;
      }
    });
  }
}
