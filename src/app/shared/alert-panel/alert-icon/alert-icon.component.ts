import {Component, Input} from '@angular/core';
import {NgClass, NgSwitch, NgSwitchCase} from "@angular/common";

@Component({
  selector: 'lsbf-alert-icon',
  standalone: true,
  imports: [
    NgClass,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './alert-icon.component.html',
  styleUrl: './alert-icon.component.css'
})
export class AlertIconComponent {
  @Input() type: "INFO" | "SUCCESS" | "WARNING" | "ERROR" = "INFO";

  get iconStyles(): string {
    switch (this.type) {
      case "INFO":
        return 'text-blue-400';
      case "SUCCESS":
        return 'text-green-400';
      case "WARNING":
        return 'text-yellow-400';
      case "ERROR":
        return 'text-red-400';
      default:
        return 'text-blue-400';
    }
  }
}
