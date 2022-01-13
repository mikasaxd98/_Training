export class AuthLoginModel {
  email: string;
  password: string;
  returnSecureToken: boolean;

  constructor( email: string = '',
               password: string = '',
               returnSecureToken: boolean = false
  ) {
    this.email = email;
    this.password = password
    this.returnSecureToken = returnSecureToken
  }
}
