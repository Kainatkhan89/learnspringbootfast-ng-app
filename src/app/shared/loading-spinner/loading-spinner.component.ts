import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'lsbf-loading-spinner',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.css'
})
export class LoadingSpinnerComponent {
  @Input() size: 'LARGE' | 'SMALL' = 'SMALL';

  get sizeStyles(): string {
    let sizeStyleClasses = '';

    switch (this.size) {
      case 'LARGE':
        sizeStyleClasses = 'h-24 w-24 border-t-4 border-b-4';
        break;
      case 'SMALL':
        sizeStyleClasses = 'h-6 w-6 border-t-1 border-b-1';
        break;
    }

    return sizeStyleClasses;
  }
}
