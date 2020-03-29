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
  @Output('save')saveEmitter: EventEmitter;

  private _valueChangeSubscription: Subscription;
  private _valueStatusSubscription: Subscription;

  public model: SignUpForm;

  /* CONSTRUCTOR */
  constructor() {
    this.saveEmitter = new EventEmitter();
    this.model = new SignUpForm();
    this._valueChangeSubscription = new Subscription();
    this._valueStatusSubscription = new Subscription();
  }

  /** LIFE HOOKS */

  ngOnInit(): void {

    const { statusChanges, valueChanges } = this.Form;

    this._valueChangeSubscription = statusChanges.subscribe(statusChange => {

      if (statusChange === 'VALID') { this.save.emit('save'); }

    });

    this._valueStatusSubscription = valueChanges.subscribe(

      (valueChange: any) => {

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

  validate = (inputBlurred: string, inputVal: FormControl): void => this[inputBlurred](inputVal);

  username = ({ invalid, touched }: FormControl): boolean => this.model.userNameInvalid = invalid;

  email = ({ invalid, touched }: FormControl): boolean => this.model.emailInvalid = invalid;

  password = ({ invalid }: FormControl): boolean => this.model.passwordInvalid = invalid;

  password_match = ({ invalid, touched }: FormControl): boolean => this.model.passwordMatchInvalid = (this.model.password === this.model.controlPassword);

  onSubmit() {
    // console.log('ev: ', ev);
    // console.log('formObject: ', formObject);
    //m this.Form.invalid
    this.save.emit('save');
  }

}
