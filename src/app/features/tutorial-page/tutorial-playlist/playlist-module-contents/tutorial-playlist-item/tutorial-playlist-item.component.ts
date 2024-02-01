import {Component, Input} from '@angular/core';
import {ITutorial} from "../../../../../core/models/learning-path/tutorial.model";
import {RouterLink} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'lsbf-tutorial-playlist-item',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgClass
  ],
  templateUrl: './tutorial-playlist-item.component.html',
  styleUrl: './tutorial-playlist-item.component.css'
})
export class TutorialPlaylistItemComponent {
  @Input() tutorial: ITutorial | undefined;
  @Input() currentlyPlayingTutorialId: number | undefined;

  get isCurrentlyPlaying(): boolean {
    return this.tutorial && this.currentlyPlayingTutorialId ? this.currentlyPlayingTutorialId === this.tutorial.id : false;
  }
}
