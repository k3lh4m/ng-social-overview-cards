import {Directive, forwardRef} from '@angular/core';
import {
  NG_VALIDATORS,
  AbstractControl,
} from '@angular/forms';

@Directive({
  selector: '[appNoNumbers][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NoNumbersDirective ), multi: true }
  ]
})
export class NoNumbersDirective {

  validate(control: AbstractControl): {[validator: string]: string} {
    if (!control.value) { // the [required] validator will check presence, not us
      return null;
    }

    const expression = /\d/;
    const value = control.value.trim();

    if (!expression.test(value)) {
      return null;
    }


    return { nonumerical: 'Names cannot include numbers' };
  }
}
