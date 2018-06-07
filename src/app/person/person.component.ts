import { PersonService } from './../services/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit  {

  persons: any[];

  private url = 'http://localhost:8080/api/persons';

  constructor(private service: PersonService) {
   }

   ngOnInit() {
    this.service.getPersons().subscribe(response => {
      this.persons = response.json();
    });
   }


  createPerson(input: HTMLInputElement) {
    const p = {name: input.value};
    input.value = '';

    this.service.createPerson(p).subscribe(response => {
      p['id'] = response.json().id;
      this.persons.splice(0, 0, p);
      // console.log(response.json());
    }, error => {
      alert('An unexpected Error !!');
    });
  }

  editPerson(p) {
     this.service.editPerson(p).subscribe(response => {
      console.log(response.json());
    } );
  }

  deletePerson(p) {
    this.service.deletePerson(p.id).subscribe(response => {
      // console.log(response.json());
      const pos = this.persons.indexOf(p);
      this.persons.splice(pos, 1);

    });
  }

}
