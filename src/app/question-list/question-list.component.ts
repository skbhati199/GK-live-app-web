import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions : any;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('/api/question').subscribe(data => {
      this.questions = data;
    });
  }

}
