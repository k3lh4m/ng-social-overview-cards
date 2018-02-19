import {Directive, forwardRef} from '@angular/core';
import {NG_VALIDATORS, AbstractControl} from '@angular/forms';

@Directive({
  selector: '[appValidateUrl][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidateUrlDirective ), multi: true }
  ]
})
export class ValidateUrlDirective {

  validate(control: AbstractControl): {[validator: string]: string} {
    if (!control.value) { // the [required] validator will check presence, not us
      return null;
    }

    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    const value = control.value.trim();

    if (value.match(regex)) {
      return null;
    }


    return { validateUrl: 'Not valid url' };
  }

}
