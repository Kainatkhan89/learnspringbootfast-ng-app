import {Component, Input, OnInit} from '@angular/core';
import {IModule} from "../../../core/models/learning-path/module.model";
import {PillComponent} from "../../../shared/pill/pill.component";
import {ModuleIconComponent} from "../../../shared/icons/module-icon/module-icon.component";

@Component({
  selector: 'ldnf-home-page-module-card',
  standalone: true,
  imports: [
    PillComponent,
    ModuleIconComponent
  ],
  templateUrl: './home-page-module-card.component.html',
  styleUrl: './home-page-module-card.component.css'
})
export class HomePageModuleCardComponent {
  @Input() moduleData: IModule | undefined;
}
