import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppValues } from '../app.component';

@Component({
  selector: 'app-see-result',
  templateUrl: './see-result.component.html',
  styleUrl: './see-result.component.css'
})
export class SeeResultComponent implements OnInit {
  @Input() appValues: AppValues | undefined;
  @Output() next = new EventEmitter<AppValues>();
  @Output() resetApp = new EventEmitter<boolean>();

  showResults() {
    const appValuesCopy = this.appValues;
    let answersArray; 
    if(appValuesCopy!.mode && appValuesCopy!.custom.length >= 1) {
      answersArray = this.appValues?.custom;
    } else {
      answersArray = this.appValues?.answers;
    }
    const result: string = answersArray[Math.floor(Math.random() * answersArray.length)];
    appValuesCopy!.answer= result; 
    this.next.emit(appValuesCopy);
  };

  askAgain() {
    this.showResults();
  }

  startOver() {
    this.resetApp.emit(true);
  };

  ngOnInit(){
    this.showResults();
  };
}
