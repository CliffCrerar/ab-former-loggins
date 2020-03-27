/**
 * Signup form model
 */

export class SignUpForm {

  private _userNameInvalid: boolean;
  private _emailInvalid: boolean;
  private _passwordInvalid: boolean;

  constructor(
    public username: string = '',
    public email: string = '',
    public password: string = ''
  ) {
    this._userNameInvalid = false;
    this._emailInvalid = false;
    this._passwordInvalid = false;
  }

  get userNameInvalid(): boolean { return this._userNameInvalid; }

  set userNameInvalid(setter: boolean) { this._userNameInvalid = setter; }

  get emailInvalid(): boolean { return this._emailInvalid; }

  set emailInvalid(setter: boolean) { this._passwordInvalid = setter; }

  get passwordInvalid(): boolean { return this._passwordInvalid; }

  set passwordInvalid(setter: boolean) { this._passwordInvalid = setter; }

}
