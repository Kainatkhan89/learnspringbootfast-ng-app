import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'ldnf-home-page-progress-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home-page-progress-card.component.html',
  styleUrl: './home-page-progress-card.component.css'
})
export class HomePageProgressCardComponent {
  @Input() progressPercentage: number = 75;

  readonly RADIUS: number = 120;
  readonly CIRCUMFERENCE: number = 2 * 22 / 7 * this.RADIUS;

  progressStrokeOffset: number = this.CIRCUMFERENCE - this.progressPercentage / 100 * this.CIRCUMFERENCE;

  showResetProgressModal(): void {
    // TODO: Create modal and display via service
  }
}
