import { Component, OnInit, ViewChild } from '@angular/core';
import { SignUpForm } from 'src/app/models/signup-form.model';
import { NgForm, FormControl } from '@angular/forms';
import { format } from 'url';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  /* ATTRIBUTES */

  @ViewChild('zerosForm', { static: true }) Form: NgForm;

  public model: SignUpForm;

  /* CONSTRUCTOR */
  constructor() {
    this.model = new SignUpForm();

    // console.log('this.model: ', this.model);
  }

  /** LIFE HOOKS */

  ngOnInit(): void {
    console.log(this.Form);
  }
  /* EVENTS */

  validate = (inputBlurred: string, inputVal: FormControl): void => this[inputBlurred](inputVal);

  username = ({ invalid, touched }: FormControl): boolean => this.model.userNameInvalid = (invalid);

  email = ({ invalid, touched }: FormControl): boolean => this.model.userNameInvalid = (invalid);

  password(formInput: FormControl) {
    console.log('formInput: ', formInput);
    if (formInput.invalid && formInput.touched) {
        this.model.passwordInvalid = true;
      } else {
        this.model.passwordInvalid = false;
      }

  }

  passwordMatch({invalid, touched}: FormControl) {

    if(invalid && touched){
      this.model.passwordMatchInvalid = true;
    } else {
      this.model.passwordMatchInvalid = false;
    }
    // this.model.passwordMatchInvalid = this.model.password === this.model.controlPassword;
    // console.log('format: ', frm);
  }

  onSubmit(formObject: NgForm, ev: Event) {
    // console.log('ev: ', ev);
    // console.log('formObject: ', formObject);
  }

  stateChanges(p) {
    console.log('stateChanges: ', p);
  }

  valueChanges(v) {
    console.log('valueChanges', v);
  }

}
