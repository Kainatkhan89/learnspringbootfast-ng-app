import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {LogoComponent} from "../../shared/logo/logo.component";
import {HomePageHeaderComponent} from "./home-page-header/home-page-header.component";
import {HomePageProgressCardComponent} from "./home-page-progress-card/home-page-progress-card.component";
import {LearningPathService} from "../../core/services/learning-path/learning-path.service";
import {ILearningPath} from "../../core/models/learning-path/learning-path.model";
import {NgForOf, NgIf} from "@angular/common";
import {Subscription} from "rxjs";
import {LoadingSpinnerComponent} from "../../shared/loading-spinner/loading-spinner.component";
import {HomePageFooterComponent} from "./home-page-footer/home-page-footer.component";
import {HomePageLearningPathComponent} from "./home-page-learning-path/home-page-learning-path.component";
import {AlertPanelComponent} from "../../shared/alert-panel/alert-panel.component";
import {UserService} from "../../core/services/user/user.service";

@Component({
  selector: 'ldnf-home-page',
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
    AlertPanelComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit, OnDestroy {
  private _learningPathService: LearningPathService = inject(LearningPathService);
  private _getLearningPathSubscription: Subscription | undefined;

  private _userService: UserService = inject(UserService);

  learningPath: ILearningPath | undefined;
  isLoading: boolean = true;
  errorOccurred: boolean = false;

  ngOnInit(): void {
    this._getLearningPathSubscription = this._learningPathService.getLearningPath().subscribe({
      next: (data) => {
        this.learningPath = data
        this.isLoading = false;
      },
      error: () => {
        this.errorOccurred = true;
        this.isLoading = false;
      }
    });
  }

  handleAlertClose() {
    this.errorOccurred = false;
  }

  ngOnDestroy(): void {
    this._getLearningPathSubscription?.unsubscribe();
  }
}
