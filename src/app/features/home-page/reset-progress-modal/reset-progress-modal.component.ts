import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'lsbf-reset-progress-modal',
  standalone: true,
  imports: [],
  templateUrl: './reset-progress-modal.component.html',
  styleUrl: './reset-progress-modal.component.css',
  animations: [
    trigger('backdropAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({  opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('modalPanelAnimation', [
      transition(':enter', [
        style({ transform: 'scale(.95)', opacity: 0 }),
        animate('300ms ease-out', style({  transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('200ms ease-in', style({ transform: 'scale(.95)', opacity: 0 }))
      ])
    ])
  ]
})
export class ResetProgressModalComponent {

}
