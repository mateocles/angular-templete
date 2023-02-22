import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent {
  disabled = false;
  message = 'No ha agregado ninguna persona';
  title = '';
  view = false;
  nameInput: string = '';
  lastNameInput: string = '';
  persons: Person[] = [
    new Person('Mateo', 'Ceballos'),
    new Person('Laura', 'Suarez'),
    new Person('Peper', 'Paco'),
  ];
  addPerson() {
    this.view = !this.view;
    this.message = 'Se ha agrego una persona';
    console.log('add');
    this.persons.push(new Person(this.nameInput, this.lastNameInput));
    this.lastNameInput = '';
    this.nameInput = '';
  }
  changeTitle(e: Event) {
    this.title = (<HTMLInputElement>e.target).value;
  }
}
