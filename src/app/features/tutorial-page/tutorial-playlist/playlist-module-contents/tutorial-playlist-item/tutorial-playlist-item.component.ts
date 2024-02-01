import {Component, Input} from '@angular/core';
import {ITutorial} from "../../../../../core/models/learning-path/tutorial.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'lsbf-tutorial-playlist-item',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './tutorial-playlist-item.component.html',
  styleUrl: './tutorial-playlist-item.component.css'
})
export class TutorialPlaylistItemComponent {
  @Input() tutorial: ITutorial | undefined;


}
