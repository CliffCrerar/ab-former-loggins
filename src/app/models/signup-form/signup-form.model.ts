/**
 * Signup form model
 */

abstract class ErrorDescriptions {

  static errorThree = 'Password should have at least 8 characters including one uppercase, one lowercase and one number';

  static errorFour = 'Passwords should match';

  static errorTwo = 'This is not correct email';

  static errorOne = 'This username is not available';

}

export class SignUpForm extends ErrorDescriptions {

  private _passwordInvalid: boolean;

  private _userNameInvalid: boolean;

  private _emailInvalid: boolean;

  constructor(

    public username: string = '',

    public password: string = '',

    public email: string = ''

  ) {
    super();

    this._userNameInvalid = false;

    this._passwordInvalid = false;

    this._emailInvalid = false;

  }

  get userNameInvalid(): boolean { return this._userNameInvalid; }

  set userNameInvalid(setter: boolean) { this._userNameInvalid = setter; }

  get passwordInvalid(): boolean { return this._passwordInvalid; }

  set passwordInvalid(setter: boolean) { this._passwordInvalid = setter; }

  get emailInvalid(): boolean { return this._emailInvalid; }

  set emailInvalid(setter: boolean) { this._passwordInvalid = setter; }

  get errorThree(): string { return SignUpForm.errorThree; }

  get errorFour(): string { return SignUpForm.errorFour; }

  get errorOne(): string { return SignUpForm.errorOne; }

  get errorTwo(): string { return SignUpForm.errorTwo; }

}
