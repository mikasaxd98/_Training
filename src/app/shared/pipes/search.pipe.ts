import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'search'
} )
export class SearchPipe implements PipeTransform {

  transform<T>( value: T[], productName: string, key: string ): T[] {
    return !productName.trim() ? value
      : value.filter( ( item: any ) => item[ key ].toLowerCase().includes( productName.toLowerCase() ));
  }

}
