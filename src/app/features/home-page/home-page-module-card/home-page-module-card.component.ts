import {Component, Input} from '@angular/core';
import {IModule} from "../../../core/models/learning-path/module.model";
import {PillComponent} from "../../../shared/pill/pill.component";

@Component({
  selector: 'ldnf-home-page-module-card',
  standalone: true,
  imports: [
    PillComponent
  ],
  templateUrl: './home-page-module-card.component.html',
  styleUrl: './home-page-module-card.component.css'
})
export class HomePageModuleCardComponent {
  @Input() moduleData: IModule | undefined;
}
