import {Component, Input} from '@angular/core';
import {ILearningPath} from "../../../core/models/learning-path/learning-path.model";
import {HomePageModuleCardComponent} from "../home-page-module-card/home-page-module-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'lsbf-home-page-learning-path',
  standalone: true,
  imports: [
    HomePageModuleCardComponent,
    NgForOf
  ],
  templateUrl: './home-page-learning-path.component.html',
  styleUrl: './home-page-learning-path.component.css'
})
export class HomePageLearningPathComponent {
  @Input() learningPathData: ILearningPath | undefined ;
}
