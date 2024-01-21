import { Component } from '@angular/core';
import answersValue from '../../utils/answersValue.json';

export interface Errors {
  show: boolean;
  message: string; 
}

export interface AppValues {
  visiblePanel: string,
  question: string,
  mode: boolean,
  answers: any,
  custom: any,
  answer: any,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  errors: Errors = {
    show: false, 
    message: ''
  }

  // Used to control which panel is shown on the web page
  appValues: AppValues = {
    visiblePanel: 'askQuestion',
    question: '',
    mode: false,
    answers: answersValue.answers,
    custom: [],
    answer: null
  };

  handleNext(values: AppValues) {
    this.appValues = values; 
    console.log(this.appValues);
  }

  handleAppReset(value: boolean) {
    let appValuesCopy = this.appValues;
    appValuesCopy = {
      ...appValuesCopy, //defaults e.g., appValues.answers
      visiblePanel: 'askQuestion',
      question: '',
      mode: false,
      custom: [],
      answer: null
    };
    this.appValues = appValuesCopy;

  }
  handleErrors(values:Errors) {
    const errorsCopy = this.errors;
    this.errors = {
      show: values.show, 
      message: values.message
    };
    setTimeout(() => {
      this.errors = errorsCopy; //hide error after 5 seconds
    }, 5000);
  }

} 
