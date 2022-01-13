export class GetProductModel {
  date: Date;
  information?: string;
  name?: string;
  photo?: string;
  price?: string;
  type?: string;
  id?: string;

  constructor( date: Date = new Date() ) {
    this.date = date;
  }
}
