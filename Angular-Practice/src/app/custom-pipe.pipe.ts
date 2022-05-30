import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    let [x] = args;
    return value * x;

    // return value * 77.66;

  }

}
