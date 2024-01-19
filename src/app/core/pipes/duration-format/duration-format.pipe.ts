import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationFormat',
  standalone: true
})
export class DurationFormatPipe implements PipeTransform {

  transform(totalDurationInSeconds: number): string {
    if (!totalDurationInSeconds || totalDurationInSeconds < 0) {
      return 'Invalid duration';
    }

    const hours: number = Math.floor(totalDurationInSeconds / 3600);
    const minutes: number = Math.floor((totalDurationInSeconds % 3600) / 60);
    const seconds: number = totalDurationInSeconds % 60;

    let formattedDuration: string = '';

    if (hours > 0) {
      formattedDuration += `${hours}h `;
    }

    if (minutes > 0 || hours > 0) {
      formattedDuration += `${minutes}m `;
    }

    formattedDuration += `${seconds}s`;

    return formattedDuration.trim();
  }

}
