import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: any[];

  constructor(http: Http) {
    http.get('http://localhost:8080/api/persons').subscribe(response => {
      this.persons = response.json();
    });
   }

  ngOnInit() {
  }

}
