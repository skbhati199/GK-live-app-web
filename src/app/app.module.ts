import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';

const appRoutes: Routes = [
  {
    path: 'questions',
    component: QuestionListComponent,
    data: { title: 'Question List' }
  },
  {
    path: 'question-details/:id',
    component: QuestionDetailsComponent,
    data: { title: 'Question Details' }
  },
  {
    path: 'question-create',
    component: QuestionCreateComponent,
    data: { title: 'Create Question' }
  },
  {
    path: 'question-edit/:id',
    component: QuestionEditComponent,
    data: { title: 'Edit Question' }
  },
  { path: '',
    redirectTo: '/questions',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionDetailsComponent,
    QuestionCreateComponent,
    QuestionEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
