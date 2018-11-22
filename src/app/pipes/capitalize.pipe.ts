import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  transform(value: any, args?: any): any {
    return this.capitalize(value);
  }
}
