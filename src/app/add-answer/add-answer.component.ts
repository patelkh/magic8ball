import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppValues, Errors} from '../app.component';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrl: './add-answer.component.css'
})
export class AddAnswerComponent {

  @Input() appValues: AppValues | undefined;
  @Output() next = new EventEmitter<AppValues>();
  @Output() hasErrors = new EventEmitter<Errors>();

  changeMode() {
    const appValuesCopy = this.appValues;
    appValuesCopy!.mode = true; 
    this.next.emit(appValuesCopy);

  }

  addCustomAnswer(customAnswer:HTMLInputElement) {
    if(customAnswer.value !== '') {
      const appValuesCopy = this.appValues;
      appValuesCopy?.custom.push(customAnswer.value);
      this.next.emit(appValuesCopy);
    } else {
      this.hasErrors.emit({
        show: true,
        message: 'Cannot be blank.'
      });
    }
 
  }

  validateResult() {
    if(this.appValues!.mode) {
      if(this.appValues?.custom.length >= 1) {
        return true;
      } else {
        return false; 
      }
    } else {
      return true; 
    }
  }

  getResults() {
    if(this.validateResult()) {
      const appValuesCopy = this.appValues;
      appValuesCopy!.visiblePanel = "seeResults";
      this.next.emit(appValuesCopy);
    } else {
        this.hasErrors.emit({
          show: true,
          message: 'You must have at least 1 answer.'
        });
    }

    
  }

}
