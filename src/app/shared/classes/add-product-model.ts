export class AddProductModel {
  type: string;
  name: string;
  photo: string;
  information: string;
  price: string;
  date?: Date;
  id?:string;

  constructor( type: string = '',
               name: string = '',
               photo: string = '',
               information: string = '',
               price: string = '', ) {
    this.type = type;
    this.name = name;
    this.photo = photo;
    this.information = information;
    this.price = price;

  }

}
