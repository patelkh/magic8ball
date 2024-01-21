import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppValues, Errors } from '../app.component';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrl: './ask-question.component.css'
})
export class AskQuestionComponent {
  @Input() appValues: AppValues | undefined;
  @Output() next = new EventEmitter<AppValues>();
  @Output() hasErrors = new EventEmitter<Errors>();


  onSubmitQuestion(userQuestion: HTMLInputElement) {
    const appValuesCopy = this.appValues; 
    if(userQuestion.value !== '') {
      //modify properties in the object copy
      appValuesCopy!.visiblePanel = "addAnswer";
      appValuesCopy!.question = userQuestion.value;
      this.next.emit(appValuesCopy); 
    } else {
      this.hasErrors.emit({
        show: true,
        message: 'Sorry, you need to enter a question.'
      });
    } 
   
  }
}
