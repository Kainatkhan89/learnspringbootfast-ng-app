import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {LogoComponent} from "../../shared/logo/logo.component";
import {HomePageHeaderComponent} from "./home-page-header/home-page-header.component";
import {HomePageProgressCardComponent} from "./home-page-progress-card/home-page-progress-card.component";
import {ILearningPath} from "../../core/models/learning-path/learning-path.model";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Subscription} from "rxjs";
import {LoadingSpinnerComponent} from "../../shared/loading-spinner/loading-spinner.component";
import {HomePageFooterComponent} from "./home-page-footer/home-page-footer.component";
import {HomePageLearningPathComponent} from "./home-page-learning-path/home-page-learning-path.component";
import {AlertPanelComponent} from "../../shared/alert-panel/alert-panel.component";
import {LearningPathService} from "../../core/services/learning-path/learning-path.service";
import {ModalService} from "../../core/services/modal/modal.service";
import {ResetProgressModalComponent} from "./reset-progress-modal/reset-progress-modal.component";

@Component({
  selector: 'lsbf-home-page',
  standalone: true,
  imports: [
    LogoComponent,
    HomePageHeaderComponent,
    HomePageProgressCardComponent,
    NgIf,
    NgForOf,
    LoadingSpinnerComponent,
    HomePageFooterComponent,
    HomePageLearningPathComponent,
    AlertPanelComponent,
    AsyncPipe,
    ResetProgressModalComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit, OnDestroy {
  private _learningPathDataService: LearningPathService = inject(LearningPathService);
  modalService: ModalService = inject(ModalService);

  private _learningPathSubscription: Subscription | undefined;

  learningPath: ILearningPath | undefined;
  isLoading: boolean = true;
  errorOccurred: boolean = false;

  ngOnInit(): void {
    this._learningPathSubscription = this._subscribeToLearningData$();
  }

  ngOnDestroy(): void {
    this._learningPathSubscription?.unsubscribe();
  }

  private _subscribeToLearningData$(): Subscription | undefined {
    return this._learningPathDataService.getLearningPath$()?.subscribe({
      next: (data) => {
        this.learningPath = data
        this.isLoading = false;
      },
      error: () => {
        this.errorOccurred = true;
        this.isLoading = false;
      }
    })
  }

  handleAlertClose() {
    this.errorOccurred = false;
  }
}
