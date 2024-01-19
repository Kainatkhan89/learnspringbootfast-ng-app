import {Component, Input} from '@angular/core';
import {NgClass, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";

@Component({
  selector: 'ldnf-module-icon',
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

  get colorStyles(): string {
    const lowerCaseColor: string = this.color ? this.color.toLowerCase() : '';
    const textColorLevel: string = (this.color === "FUCHSIA" || this.color === 'ROSE' || this.color === 'SKY') ? '600' : '700';

    return `bg-${lowerCaseColor}-100/75 text-${lowerCaseColor}-${textColorLevel}`;
  }
  get sizeStyles(): string {
    return this.size === 'LARGE' ? 'p-3' : 'p-1.5';
  }

  get colorAndSizeStyles(): string {
    console.log(this.colorStyles + ' ' + this.sizeStyles);

    return this.colorStyles + ' ' + this.sizeStyles;
  }
}
