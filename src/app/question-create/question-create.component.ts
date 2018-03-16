import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionCreateComponent implements OnInit {

  question  = {
    "questionTitle":"",
    "publisher":""
  };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveBook() {
    this.http.post('/api/question', this.question)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/question-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
