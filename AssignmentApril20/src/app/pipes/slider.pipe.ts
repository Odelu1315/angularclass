import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slider'
})
export class SliderPipe implements PipeTransform {

  transform(products: any,... args: number[]): any {

       return products;
  }

}
