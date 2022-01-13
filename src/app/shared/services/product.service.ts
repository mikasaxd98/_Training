import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddProductModel } from '../classes/add-product-model';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { GetProductModel } from '../classes/get-product-model';

@Injectable( {
  providedIn: 'root'
} )
export class ProductService {

  public productTypeName:string = '';

  constructor( private _http: HttpClient ) {
  }

  public create( product: AddProductModel ): Observable<AddProductModel> {
    return this._http.post<AddProductModel>( `${environment.fbDbUrl}/product.json`, product ).pipe(
      map( ( res ) => {
        return {
          ...product,
          id: res.id,
          date: new Date( !!product.date ? product.date : new Date() )
        }
      } )
    )
  }

  public getAll(): Observable<GetProductModel[]> {
    return this._http.get<GetProductModel>( `${environment.fbDbUrl}/product.json` ).pipe(
      map( ( res: any ) => {
        return Object.keys( res )
          .map( key => ({
            ...res[ key ],
            id: key,
            date: new Date( res[ key ].date )
          }) )
      } )
    )
  }

  public getProductById( id: string ): Observable<GetProductModel> {
    return this._http.get<GetProductModel>( `${environment.fbDbUrl}/product/${id}.json` ).pipe(
      map( ( res: GetProductModel ) => {
        console.log( res )
        return {
          ...res,
          id
        }
      } )
    )
  }

  public remove( id: string ) {

    return this._http.delete( `${environment.fbDbUrl}/product/${id}.json` )
  }



  public update( product: GetProductModel ): Observable<GetProductModel> {
    return this._http.patch<GetProductModel>(`${environment.fbDbUrl}/product/${product.id}.json`, product).pipe(
      map( ( res ) => {
        return {
          ...product,
          id: res.id,
          date: new Date( !!product.date ? product.date : new Date() )
        }
      } )
    )
  }

  public setProductType(productType: string){
    this.productTypeName = productType;
  }
}
