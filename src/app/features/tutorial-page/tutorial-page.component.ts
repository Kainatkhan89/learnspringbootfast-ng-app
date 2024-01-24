import {Component, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TutorialService} from "../../core/services/tutorial/tutorial.service";
import {Subscription} from "rxjs";
import {ITutorial} from "../../core/models/learning-path/tutorial.model";

@Component({
  selector: 'lsbf-tutorial-page',
  standalone: true,
  imports: [],
  templateUrl: './tutorial-page.component.html',
  styleUrl: './tutorial-page.component.css'
})
export class TutorialPageComponent implements OnInit, OnDestroy {

  private _tutorialService: TutorialService = inject(TutorialService);
  private _currentTutorialSubscription: Subscription | undefined;

  currentTutorial: ITutorial | undefined;

  ngOnInit(): void {
    this._currentTutorialSubscription = this._tutorialService.currentTutorial$.subscribe(value => {
      if (value) {
        this.currentTutorial = value;
      }
    });
  }

  ngOnDestroy(): void {
    this._currentTutorialSubscription?.unsubscribe();
  }
}
