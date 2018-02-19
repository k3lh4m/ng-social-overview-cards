import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-validation-messages',
  template: `
    <div class="validationMessages-container">
      <ul class="validationMessages-messageContainer">
        <li class="validationMessages-message" *ngFor="let message of messages">{{message}}</li>
      </ul>
    </div>
  `,
  styleUrls: ['validation-messages.component.scss']
})
export class ValidationMessagesComponent {
  @Input()
  messages: Array<string>;
}
