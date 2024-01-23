import {Component, Input} from '@angular/core';
import {NgClass, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";

@Component({
  selector: 'lsbf-module-icon',
  standalone: true,
  imports: [
    NgClass,
    NgSwitch,
    NgSwitchCase,
    NgIf
  ],
  templateUrl: './module-icon.component.html',
  styleUrl: './module-icon.component.css'
})
export class ModuleIconComponent {

  @Input() color: "INDIGO" | "TEAL" | "PURPLE" | "PINK" | "YELLOW" | "FUCHSIA" | "ROSE" | "SKY" | undefined;
  @Input() icon : "BOOK" | "FLAG" | "TERMINAL" | "WARNING" | "SHIELD" | "DATABASE" | "LOCK" | "PLANE" | undefined;
  @Input() size: "SMALL" | "LARGE" | undefined;

  get colorAndSizeStyles(): string {
    return this.colorStyles + ' ' + this.sizeStyles;
  }

  get sizeStyles(): string {
    return this.size === 'LARGE' ? 'p-3' : 'p-1.5';
  }

  get colorStyles(): string {
    let colorStyleClasses: string = '';

    switch (this.color) {
      case "INDIGO":
        colorStyleClasses = 'bg-indigo-100/75 text-indigo-700';
        break;
      case "TEAL":
        colorStyleClasses = 'bg-teal-100/75 text-teal-700';
        break;
      case "PURPLE":
        colorStyleClasses = 'bg-purple-100/75 text-purple-700';
        break;
      case "PINK":
        colorStyleClasses = 'bg-pink-100/75 text-pink-700';
        break;
      case "YELLOW":
        colorStyleClasses = 'bg-yellow-100/75 text-yellow-700';
        break;
      case "FUCHSIA":
        colorStyleClasses = 'bg-fuchsia-100/75 text-fuchsia-700';
        break;
      case "ROSE":
        colorStyleClasses = 'bg-rose-100/75 text-rose-700';
        break;
      case "SKY":
        colorStyleClasses = 'bg-sky-100/75 text-sky-700';
        break;
      default:
        colorStyleClasses = '';
    }

    return colorStyleClasses;
  }
}
