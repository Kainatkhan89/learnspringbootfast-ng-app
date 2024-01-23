import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {AlertIconComponent} from "./alert-icon/alert-icon.component";

@Component({
  selector: 'lsbf-alert-panel',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    AlertIconComponent
  ],
  templateUrl: './alert-panel.component.html',
  styleUrl: './alert-panel.component.css'
})
export class AlertPanelComponent {
  @Input() type: "INFO" | "SUCCESS" | "WARNING" | "ERROR" = "INFO";
  @Input() headingText: string = '';
  @Input() message: string = '';
  @Output() closeAlert: EventEmitter<void> = new EventEmitter<void>();

  get backgroundStyles(): string {
    let backgroundStyleClasses: string = '';

    switch (this.type) {
      case "INFO":
        backgroundStyleClasses = 'bg-blue-50';
        break;
      case "SUCCESS":
        backgroundStyleClasses = 'bg-green-50';
        break;
      case "WARNING":
        backgroundStyleClasses = 'bg-yellow-50';
        break;
      case "ERROR":
        backgroundStyleClasses = 'bg-red-50';
        break;
      default:
        backgroundStyleClasses = 'bg-blue-50';
        break;
    }

    return backgroundStyleClasses;
  }

  get iconStyles(): string {
    let iconStyleClasses: string = '';

    switch (this.type) {
      case "INFO":
        iconStyleClasses = 'text-blue-400';
        break;
      case "SUCCESS":
        iconStyleClasses = 'text-green-400';
        break;
      case "WARNING":
        iconStyleClasses = 'text-yellow-400';
        break;
      case "ERROR":
        iconStyleClasses = 'text-red-400';
        break;
      default:
        iconStyleClasses = 'text-blue-400';
        break;
    }

    return iconStyleClasses;
  }

  get headingStyles(): string {
    let headingStyleClasses: string = '';

    switch (this.type) {
      case "INFO":
        headingStyleClasses = 'text-blue-800';
        break;
      case "SUCCESS":
        headingStyleClasses = 'text-green-800';
        break;
      case "WARNING":
        headingStyleClasses = 'text-yellow-800';
        break;
      case "ERROR":
        headingStyleClasses = 'text-red-800';
        break;
      default:
        headingStyleClasses = 'text-blue-800';
        break;
    }

    return headingStyleClasses;
  }

  get messageStyles(): string {
    let messageStyleClasses: string = '';

    switch (this.type) {
      case "INFO":
        messageStyleClasses = 'text-blue-700';
        break;
      case "SUCCESS":
        messageStyleClasses = 'text-green-700';
        break;
      case "WARNING":
        messageStyleClasses = 'text-yellow-700';
        break;
      case "ERROR":
        messageStyleClasses = 'text-red-700';
        break;
      default:
        messageStyleClasses = 'text-blue-700';
        break;
    }

    messageStyleClasses += this.headingText ? ' mt-2' : '';

    return messageStyleClasses;
  }

  get buttonStyles(): string {
    let buttonStyleClasses: string = '';

    switch (this.type) {
      case "INFO":
        buttonStyleClasses = 'bg-blue-50 text-blue-800 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50';
        break;
      case "SUCCESS":
        buttonStyleClasses = 'bg-green-50 text-green-800 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50';
        break;
      case "WARNING":
        buttonStyleClasses = 'bg-yellow-50 text-yellow-800 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-yellow-red-50';
        break;
      case "ERROR":
        buttonStyleClasses = 'bg-red-50 text-red-800 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50';
        break;
      default:
        buttonStyleClasses = 'bg-blue-50 text-blue-800 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50';
        break;
    }

    return buttonStyleClasses;
  }

  closePanel(): void {
    this.closeAlert.emit();
  }
}
