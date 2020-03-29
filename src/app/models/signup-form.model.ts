/**
 * Signup form model
 */

abstract class ErrorDescriptions {

  private static _passwordSecCrit = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  private static _errorThree = 'Password should have at least 8 characters including one uppercase, one lowercase and one number';

  private static _errorFour = 'Passwords should match';

  private static _errorTwo = 'This is not correct email';

  private static _errorOne = 'This username is not available';

  get passwordSecCrit(): RegExp { return ErrorDescriptions._passwordSecCrit; }

  get errorThree(): string { return ErrorDescriptions._errorThree; }

  get errorFour(): string { return ErrorDescriptions._errorFour; }

  get errorOne(): string { return ErrorDescriptions._errorOne; }

  get errorTwo(): string { return ErrorDescriptions._errorTwo; }

}

export class SignUpForm extends ErrorDescriptions {

  private _passwordMatchInvalid: boolean;

  private _passwordInvalid: boolean;

  private _userNameInvalid: boolean;

  private _emailInvalid: boolean;

  constructor(

    public controlPassword: string = null,

    public username: string = null,

    public password: string = null,

    public email: string = null

  ) {

    super();

    this.passwordMatchInvalid = false;

    this.userNameInvalid = false;

    this.passwordInvalid = false;

    this.emailInvalid = false;

  }

  get passwordMatchInvalid(): boolean { return this._passwordMatchInvalid; }

  set passwordMatchInvalid(setter: boolean) { this._passwordMatchInvalid = setter; }

  get userNameInvalid(): boolean { return this._userNameInvalid; }

  set userNameInvalid(setter: boolean) { this._userNameInvalid = setter; }

  get passwordInvalid(): boolean { return this._passwordInvalid; }

  set passwordInvalid(setter: boolean) { this._passwordInvalid = setter; }

  get emailInvalid(): boolean { return this._emailInvalid; }

  set emailInvalid(setter: boolean) { this._emailInvalid = setter; }

}
