// @ts-nocheck

import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SignupFormComponent } from './signup-form.component';
import { FieldmatchesDirective } from '../../validators/fieldmatches.directive';

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;
  let debugElement: DebugElement;
  let formElem: DebugElement;
  let formControl: NgForm;

  /**
   * Gets form control or undefined
   * @param name form control name
   * @returns FormControl
   */
  function getFormControl(name) {
    return formControl && formControl.form.get(name);
  }

  /**
   * Returns form error nativeElement for given field
   * @params fieldName
   */
  function getFormError(fieldName) {
    const elem = fixture.debugElement.query(
      By.css(`.form-${fieldName}-error`)
    );
    return elem && elem.nativeElement;
  }

  /**
   * @returns Array<String> array of form field names
   */
  function getFormFieldNames() {
    return formControl && Object.keys(formControl.form.controls);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        SignupFormComponent,
        FieldmatchesDirective
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
    formElem = debugElement.query(By.directive(NgForm));
    formControl = formElem && formElem.injector.get(NgForm);
  });

  beforeEach((done) => {
    fixture.whenStable().then(done);
  });

  it('has a form control', () => {
    // tslint:disable-next-line: no-shadowed-variable
    const formElem = debugElement.query(By.directive(NgForm));
    // tslint:disable-next-line: no-shadowed-variable
    const formControl = formElem && formElem.injector.get(NgForm);
    expect(formControl).toBeTruthy('form should have NgForm control');
  });

  it('has "username" form control', () => {
    expect(getFormFieldNames()).toContain('username', 'Missing NgModel or FormControl');
  });

  it('should validate username is required', () => {
    // get control
    const control = getFormControl('username');

    // expect invalid
    expect(control && control.valid).toBeFalsy('Username invalid when empty');

    // set value
    // tslint:disable-next-line: no-unused-expression
    control && control.setValue('value');
    // expect valid
    expect(control && control.valid).toBeTruthy('Username valid when not empty');
  });

  it('should validate email is correct', () => {
    // get control
    const control = getFormControl('email');

    // tslint:disable-next-line: no-unused-expression
    control && control.setValue('test');
    // expect invalid
    expect(control && control.valid).toBeFalsy('Email should be invalid');

    // set value
    // tslint:disable-next-line: no-unused-expression
    control && control.setValue('test@test.com');
    // expect valid
    expect(control && control.valid).toBeTruthy('Email should be valid');
  });

  const invalidPasswords = [{
    password: 'abc',
    message: 'too short'
  }, {
    password: 'abc10',
    message: 'too short'
  }, {
    password: 'ABC',
    message: 'too short'
  }, {
    password: 'ABC10',
    message: 'too short'
  }, {
    password: 'aB5',
    message: 'too short'
  }, {
    password: 'password',
    message: 'length is ok, but only lowercase chars present'
  }, {
    password: 'PASSWORD',
    message: 'length is ok, but only uppercase chars present'
  }, {
    password: 'Password',
    message: 'length is ok, both upper and lowercase chars present, but no number'
  }, {
    password: 'pa55word',
    message: 'length is ok, lowercase and number present, but no uppercase'
  }, {
    password: 'PA55WORD',
    message: 'length is ok, uppercase and number present, but no lowercase'
  }];

  const validPasswords = [{
    password: 'Pa55word',
    message: 'length is ok, all of special chars present'
  }, {
    password: 'Pa55wordForAngular',
    message: 'longer than 8 chars is also ok'
  }];

  it('should validate password with pattern - at least 8 letters, numbers and uppercase', () => {
    // get control
    const control = getFormControl('password');

    // expect invalid
    for (const { message, password } of invalidPasswords) {
      // tslint:disable-next-line: no-unused-expression
      control && control.setValue(password);
      expect(control && control.valid).toBeFalsy(`Password should be invalid: ${message}`);
    }

    // expect valid
    for (const { message, password } of validPasswords) {
      // tslint:disable-next-line: no-unused-expression
      control && control.setValue(password);
      expect(control && control.valid).toBeTruthy(`Password should be valid: ${message}`);
    }
  });

  it('should validate passwords match', () => {
    // get control
    const control = getFormControl('password');
    const control_match = getFormControl('password_match');

    // tslint:disable-next-line: no-unused-expression
    control && control.setValue('abc1');
    // tslint:disable-next-line: no-unused-expression
    control_match && control_match.setValue('abc2');
    // expect invalid
    expect(control_match && control_match.valid).toBeFalsy('Match should be invalid');

    // set value
    // tslint:disable-next-line: no-unused-expression
    control && control.setValue('Pa55word');
    // tslint:disable-next-line: no-unused-expression
    control_match && control_match.setValue('Pa55word');
    // expect valid
    expect(control_match && control_match.valid).toBeTruthy('Match should be valid');
  });

  it('has .form-username-error when username is invalid', () => {
    const control = getFormControl('username');

    // Make Field Valid
    // tslint:disable-next-line: no-unused-expression
    control && control.setErrors(null);
    fixture.detectChanges();
    expect(getFormError('username')).toBeFalsy('Error message should not be present');

    // Make field invalid
    // tslint:disable-next-line: no-unused-expression
    control && control.setErrors({ fake_error: true });
    fixture.detectChanges();
    expect(getFormError('username')).toBeTruthy('Error message should be present');
  });

  it('has .form-password_match-error when password_match is invalid', () => {
    const control = getFormControl('password_match');

    // Make Field Valid
    // tslint:disable-next-line: no-unused-expression
    control && control.setErrors(null);
    fixture.detectChanges();
    expect(getFormError('password_match')).toBeFalsy('Error message should not be present');

    // Make field invalid
    // tslint:disable-next-line: no-unused-expression
    control && control.setErrors({ fake_error: true });
    fixture.detectChanges();
    expect(getFormError('password_match')).toBeTruthy('Error message should be present');
  });
});



@Component({
  template: `
    <signup-form (save)="submit($event)"></signup-form>
  `
})
export class ContainerComponent {
  submit() { }
}

describe('SignupFormComponent Inputs Outputs', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContainerComponent,
        SignupFormComponent,
        FieldmatchesDirective
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit "save" event when form submitted', () => {
    spyOn(component, 'submit');
    const form = fixture.debugElement.query(By.directive(NgForm));
    const ngForm = form.injector.get(NgForm);

    return fixture.whenRenderingDone().then(() => {
      // tslint:disable-next-line: forin
      for (const name in ngForm.form.controls) {
        ngForm.form.controls[name].setErrors(null);
      }
      form.nativeElement.dispatchEvent(new Event('submit'));
      expect(component.submit).toHaveBeenCalled();
    });
  });
});
