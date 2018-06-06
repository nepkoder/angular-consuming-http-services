import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent  {

  persons: any[];

  private url = 'http://localhost:8080/api/persons';

  constructor(private http: Http) {
    http.get(this.url).subscribe(response => {
      this.persons = response.json();
    });
   }

  createPerson(input: HTMLInputElement) {
    const p = {name: input.value};
    input.value = '';

    this.http.post(this.url, JSON.stringify(p)).subscribe(response => {
      p['id'] = response.json().id;
      this.persons.splice(0, 0, p);
      // console.log(response.json());
    });
  }


  editPerson(p) {
    this.http.patch(this.url, JSON.stringify({ isRead: true})).subscribe(response => {
      console.log(response.json());
    } );
  }

  deletePerson(p) {
    this.http.delete(this.url + '/' + p.id).subscribe(response => {
      // console.log(response.json());
      const pos = this.persons.indexOf(p);
      this.persons.splice(pos, 1);

    });
  }

}
