import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { SignUpForm } from '../../../models/signup-form/signup-form.model';
import { NgForm } from '@angular/forms';
import { format } from 'url';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  /* ATTRIBUTES */
  @ViewChild('form', { static: true }) Form: NgForm;
  public model: SignUpForm;
  /* CONSTRUCTOR */
  constructor() {
    this.model = new SignUpForm();
    console.log('this.model: ', this.model);
  }

  /** LIFE HOOKS */

  ngOnInit(): void {
    console.log(this.Form);
  }

  /* EVENTS */

  validate = (inputBlurred) => this[inputBlurred];

  username() {
    console.log('format: ', this.Form);
  }

  email() {
    console.log('format: ', this.Form);
  }

  password() {
    console.log('format: ', this.Form);
  }

  passwordMatch() {
    console.log('format: ', this.Form);
  }

  onSubmit(formObject: NgForm, ev: Event) {
    console.log('ev: ', ev);
    console.log('formObject: ', formObject);
  }

  stateChanges(p) {
    console.log('stateChanges: ', p);
  }

  valueChanges(v) {
    console.log('valueChanges', v);
  }

}
