import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentageFormat',
  standalone: true
})
export class PercentageFormatPipe implements PipeTransform {

  transform(value: number | undefined): string {
    if (value == null) {
      return '';
    }

    const roundedValue: number = Math.round(value);

    return `${roundedValue}%`;
  }

}
