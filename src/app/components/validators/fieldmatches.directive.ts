import { AbstractControl, ValidationErrors, Validator, NgModel, NG_VALIDATORS } from '@angular/forms'
import { Directive, Input, OnDestroy } from '@angular/core'

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[fieldmatches]',
  providers: [
  ]
})
export class FieldmatchesDirective implements Validator, OnDestroy {

  @Input('fieldmatches') NgModel;

  constructor() { }

  public validate(f: AbstractControl): ValidationErrors | null {
    console.log('fieldmatches: ', f);
    return null
  }

  public registerOnValidatorChange(fn: () => void): void {
    // this.fieldmatches.valueChanges
  }

  ngOnDestroy() {

  }
}
