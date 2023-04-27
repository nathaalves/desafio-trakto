export class User {
  constructor(
    public id: string,
    public email: string,
    public firstName: string,
    public profilePicture: string,
    private _access_token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._access_token;
  }
}
