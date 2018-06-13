import { NotFoundError } from './../shared/not-found-error';
import { PersonService } from './../services/person.service';
import { Component, OnInit } from '@angular/core';
import { post, parseHttpResponse } from 'selenium-webdriver/http';
import { AppError } from '../shared/app-error';
import { BadInputError } from '../shared/bad-input-error';

@Component({
  selector: 'app-person-new',
  templateUrl: './person-new.component.html',
  styleUrls: ['./person-new.component.css']
})
export class PersonNewComponent implements OnInit {

  persons: any[];
  constructor(private service: PersonService) { }

  ngOnInit() {
  this.service.getAll().subscribe(persons => {
    this.persons = persons;
  });
  }

  createPost(input: HTMLInputElement) {
    let person = { name: input.value};
    this.persons.splice(0, 0, person);

    input.value = '';
    this.service.create(person).subscribe(response => {
      post['id'] = response.id;
    }, (error: AppError) => {
      this.persons.splice(0, 1);
      if (error instanceof BadInputError) {
        alert('Bad Inputs Error');
      } else {
        alert('An unexpected error on creating name.');
      }
    });
  }

  updatePerson(input: HTMLInputElement) {
    this.service.update(input).subscribe(person => {
      console.log(person);
    });
  }

  deletePerson(input: HTMLInputElement) {
    let index = this.persons.indexOf(input);
    this.persons.splice(index, 1);

    this.service.delete(input.id).subscribe(null, (error: AppError) => {
      this.persons.splice(index, 0, input);

      if (error instanceof NotFoundError) {
        alert('This name is already deleted');
      } else throw error;
    });
  }

}
