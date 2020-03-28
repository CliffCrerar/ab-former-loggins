import { AbstractControl, ValidationErrors, Validator, NgModel, NG_VALIDATORS } from '@angular/forms'
import { Directive, Input, OnDestroy } from '@angular/core'

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[fieldmatches]',
  providers: [
  ]
})
export class FieldmatchesDirective implements Validator, OnDestroy {

  @Input('fieldmatches') varOne: NgModel;

  constructor() {
    console.log('var1: ', this.varOne);

    console.log('Run Directives');
  }

  public validate(f: AbstractControl): ValidationErrors | null {
    // console.log('ValidationErrors: ', ValidationErrors);
    // console.log('AbstractControl: ', AbstractControl);
    return null;
  }

  public registerOnValidatorChange(fn: () => void): void {
    console.log('fn: ', fn);
    // this.fieldmatches.valueChanges
  }

  ngOnDestroy() {

  }
}
