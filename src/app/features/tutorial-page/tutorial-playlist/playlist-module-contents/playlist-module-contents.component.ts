import {Component, Input} from '@angular/core';
import {IModule} from "../../../../core/models/learning-path/module.model";
import {NgIf} from "@angular/common";
import {ModuleIconComponent} from "../../../../shared/icons/module-icon/module-icon.component";

@Component({
  selector: 'lsbf-playlist-module-contents',
  standalone: true,
  imports: [
    NgIf,
    ModuleIconComponent
  ],
  templateUrl: './playlist-module-contents.component.html',
  styleUrl: './playlist-module-contents.component.css'
})
export class PlaylistModuleContentsComponent {
  @Input() module: IModule | undefined;
}
