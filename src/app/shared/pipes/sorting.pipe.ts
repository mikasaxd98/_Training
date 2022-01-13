import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'sorting'
} )
export class SortingPipe implements PipeTransform {

  transform<T>( value: T[] | any, productTypeName: string, key: string ): T[] | any {

    return !productTypeName.toLowerCase() ?
      value : value.filter( ( item: any ) => item[ key ] === productTypeName.toLowerCase() );
  }

}
