import { Component, OnInit, ViewChild, Output, OnDestroy } from '@angular/core';
import { SignUpForm } from 'src/app/models/signup-form.model';
import { NgForm, FormControl } from '@angular/forms';
import { EventEmitter } from 'events';
import { Subscription } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit, OnDestroy {
  /* ATTRIBUTES */

  @ViewChild('zerosForm', { static: true }) Form: NgForm;

  // tslint:disable-next-line: no-output-rename
  // @Output('save') save: EventEmitter = new EventEmitter();

  private _valueChangeSubscription: Subscription;
  private _valueStatusSubscription: Subscription;
  public model: SignUpForm;

  /* CONSTRUCTOR */
  constructor() {
    this._valueChangeSubscription = new Subscription();
    this._valueStatusSubscription = new Subscription();
    this.model = new SignUpForm();

  }

  /** LIFE HOOKS */

  ngOnInit(): void {
    console.log('Form: ', this.Form);
    const { statusChanges, valueChanges } = this.Form;

    this._valueChangeSubscription = statusChanges.subscribe(statusChange => {
      console.log('statusChange: ', statusChange);

      // if (statusChange === 'VALID') { this.save.emit('save'); }

    });

    this._valueStatusSubscription = valueChanges.subscribe(

      (valueChange: any) => {
        console.log('valueChange: ', valueChange);

        Object.keys(valueChange).forEach(key => {

          this.validate(key, this.Form.controls[key] as FormControl);

        });

      },

      (error: ExceptionInformation) => { console.log('VALUE-CHANGE-ERROR:', error); },

      () => { console.log('VALUE-CHANGE-COMPLETE'); }
    );
  }

  ngOnDestroy(): void {

    this._valueChangeSubscription.unsubscribe();

    this._valueStatusSubscription.unsubscribe();

  }
  /* EVENTS */

  validate = (inputName: string, inputVal: FormControl): void => this[inputName](inputVal);

  username = ({ invalid, touched }: FormControl): boolean =>
    touched && (this.model.userNameInvalid = invalid)

  email = ({ invalid, touched }: FormControl): boolean =>
    touched && (this.model.emailInvalid = invalid)

  password = ({ invalid, touched }: FormControl): boolean =>
    touched && (this.model.passwordInvalid = invalid)

  password_match = ({ invalid, touched }: FormControl): boolean =>
    this.model.passwordMatchInvalid = (this.model.password === this.model.controlPassword)

  onSubmit() {
    // this.save.emit('save');
  }

}
