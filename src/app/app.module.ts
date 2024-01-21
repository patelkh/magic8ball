import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { SeeResultComponent } from './see-result/see-result.component';
import { AddAnswerComponent } from './add-answer/add-answer.component';


@NgModule({
  declarations: [
    AppComponent,
    AskQuestionComponent,
    SeeResultComponent,
    AddAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
