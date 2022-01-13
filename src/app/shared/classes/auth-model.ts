export class AuthModel {
  displayName?: string;
  email?: string;
  expiresIn: string;
  idToken: string;
  kind?: string;
  localId?: string;
  refreshToken?: string;
  registered?: boolean;

  constructor( expiresIn: string = '',
               displayName: string = '',
               email: string = '',
               idToken: string = '',
               kind: string = '',
               localId: string = '',
               refreshToken: string = '',
               registered: boolean = false,
  ) {
    this.expiresIn = expiresIn;
    this.displayName = displayName;
    this.email = email;
    this.idToken = idToken;
    this.kind = kind;
    this.localId = localId;
    this.refreshToken = refreshToken;
    this.registered = registered;

  }
}
