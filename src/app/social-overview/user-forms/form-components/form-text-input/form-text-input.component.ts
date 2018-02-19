import {Component, Input, Optional, Inject, ViewChild, ViewEncapsulation} from '@angular/core';

import {
  NgModel,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  NG_ASYNC_VALIDATORS,
} from '@angular/forms';
import {ElementBase} from "../../element-base/element-base.class";

@Component({
  selector: 'app-form-text-input',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'form-text-input.component.html',
  styleUrls: ['form-text-input.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: FormTextInputComponent, multi: true}
  ],
})
export class FormTextInputComponent extends ElementBase<string>{
  @Input() public label: string;
  @Input() public placeholder: string;

  @ViewChild(NgModel) model: NgModel;

  public identifier = `form-text-${identifier++}`;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) public validator: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) public asyncValidator: Array<any>,
  ) {
    super(validator, asyncValidator);
  }
}

let identifier = 0;
