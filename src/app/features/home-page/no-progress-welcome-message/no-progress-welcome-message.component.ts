import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {WavingHandComponent} from "../../../shared/icons/waving-hand/waving-hand.component";
import {ITutorial} from "../../../core/models/learning-path/tutorial.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'lsbf-no-progress-welcome-message',
  standalone: true,
  imports: [
    RouterLink,
    WavingHandComponent,
    NgIf
  ],
  templateUrl: './no-progress-welcome-message.component.html',
  styleUrl: './no-progress-welcome-message.component.css'
})
export class NoProgressWelcomeMessageComponent {
  @Input() firstTutorial: ITutorial | undefined;
}
