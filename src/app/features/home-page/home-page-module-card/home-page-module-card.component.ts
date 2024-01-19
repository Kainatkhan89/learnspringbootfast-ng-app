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
export class HomePageModuleCardComponent implements OnInit {
  @Input() moduleData: IModule | undefined;
  totalDurationFormatted: string | undefined;

  ngOnInit() {
    this.calculateTotalDuration();
  }

  private calculateTotalDuration() {
    if (this.moduleData && this.moduleData.tutorials) {
      const totalSeconds = this.moduleData.tutorials.reduce((total, tutorial) => total + tutorial.durationSeconds, 0);
      this.totalDurationFormatted = this.formatDuration(totalSeconds);
    }
  }

  private formatDuration(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;
    return `${hours}h ${minutes}m ${secondsLeft}s`;
  }

}
