import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IModule} from "../../../../core/models/learning-path/module.model";
import {NgForOf, NgIf} from "@angular/common";
import {ModuleIconComponent} from "../../../../shared/icons/module-icon/module-icon.component";
import {TutorialPlaylistItemComponent} from "./tutorial-playlist-item/tutorial-playlist-item.component";

@Component({
  selector: 'lsbf-playlist-module-contents',
  standalone: true,
    imports: [
        NgIf,
        ModuleIconComponent,
        TutorialPlaylistItemComponent,
        NgForOf
    ],
  templateUrl: './playlist-module-contents.component.html',
  styleUrl: './playlist-module-contents.component.css'
})
export class PlaylistModuleContentsComponent {
  @Input() module: IModule | undefined;
}
