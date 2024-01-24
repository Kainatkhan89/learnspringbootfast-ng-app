import {Component, Input} from '@angular/core';
import {ILearningPath} from "../../../core/models/learning-path/learning-path.model";
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'lsbf-tutorial-playlist',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './tutorial-playlist.component.html',
  styleUrl: './tutorial-playlist.component.css'
})
export class TutorialPlaylistComponent {
  @Input() userLearningData: ILearningPath | undefined;
}
