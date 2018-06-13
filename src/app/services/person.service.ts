import { DataService } from './../shared/data.service';
import {
  Http
} from '@angular/http';
import {
  Injectable
} from '@angular/core';

@Injectable()
export class PersonService extends DataService {

  // private url = 'http://localhost:8080/api/persons';
  // constructor(private http: Http) {}

  // getPersons() {
  //   return this.http.get(this.url);
  // }

  // createPerson(p) {
  //   return this.http.post(this.url, JSON.stringify(p));
  // }

  // editPerson(p) {
  //   return this.http.patch(this.url + '/' + p.id, JSON.stringify(p));
  // }

  // deletePerson(id) {
  //   return this.http.delete(this.url + '/' + id);
  // }

  constructor(http: Http) {
    super('http://localhost:8080/api/persons', http);
  }

}
