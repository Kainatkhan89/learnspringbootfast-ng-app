import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'lsbf-pill',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.css'
})
export class PillComponent {

  @Input() color: "INDIGO" | "TEAL" | "PURPLE" | "PINK" | "YELLOW" | "FUCHSIA" | "ROSE" | "SKY" | undefined;
  @Input() text : string | undefined;

  get colorStyles(): string {
    let colorStyleClasses: string = '';
    switch (this.color) {
      case "INDIGO":
        colorStyleClasses = 'bg-indigo-100/75 text-indigo-700 ring-indigo-600/20';
        break;
      case "TEAL":
        colorStyleClasses = 'bg-teal-100/75 text-teal-700 ring-teal-600/20';
        break;
      case "PURPLE":
        colorStyleClasses = 'bg-purple-100/75 text-purple-700 ring-purple-600/20';
        break;
      case "PINK":
        colorStyleClasses = 'bg-pink-100/75 text-pink-700 ring-pink-600/20';
        break;
      case "YELLOW":
        colorStyleClasses = 'bg-yellow-100/75 text-yellow-700 ring-yellow-600/20';
        break;
      case "FUCHSIA":
        colorStyleClasses = 'bg-fuchsia-100/75 text-fuchsia-600 ring-fuchsia-600/20';
        break;
      case "ROSE":
        colorStyleClasses = 'bg-rose-100/75 text-rose-600 ring-rose-600/20';
        break;
      case "SKY":
        colorStyleClasses = 'bg-sky-100/75 text-sky-600 ring-sky-600/20';
        break;
      default:
        colorStyleClasses = '';
    }

    return colorStyleClasses;
  }
}
