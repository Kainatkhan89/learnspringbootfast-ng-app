import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'ldnf-pill',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.css'
})
export class PillComponent {

  @Input() color: "INDIGO" | "TEAL" | "PURPLE" | "PINK" | "YELLOW" | "FUCHSIA" | "ROSE" | "SKY" | undefined = "INDIGO";
  @Input() text : string | undefined;

  get colorStyle(): string {
    const lowerCaseColor: string = this.color ? this.color.toLowerCase() : '';
    const textColorLevel: string = (this.color === "FUCHSIA" || this.color === 'ROSE' || this.color === 'SKY') ? '600' : '700';

    return `bg-${lowerCaseColor}-100/75 text-${lowerCaseColor}-${textColorLevel} ring-${lowerCaseColor}-600/20`;
  }
}
