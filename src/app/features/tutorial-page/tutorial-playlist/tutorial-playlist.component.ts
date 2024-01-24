import {Component, Input} from '@angular/core';
import {ILearningPath} from "../../../core/models/learning-path/learning-path.model";
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'lsbf-tutorial-playlist',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf,

  ],
  templateUrl: './tutorial-playlist.component.html',
  styleUrl: './tutorial-playlist.component.css',
  animations: [
    trigger('backdropAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in-out', style({  opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('500ms ease-in-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideOverAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-in-out', style({  transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('500ms ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class TutorialPlaylistComponent {
  @Input() userLearningData: ILearningPath | undefined;

  showPlaylist: boolean = true;

  closePlaylist(): void {
    this.showPlaylist = false;
  }
}
