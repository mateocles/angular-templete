import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from '../persons/person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() personCreation = new EventEmitter<Person>();
  nameInput: string = '';
  lastNameInput: string = '';
  addPerson() {
    let person = new Person(this.nameInput, this.lastNameInput);
    this.personCreation.emit(person);
    this.lastNameInput = '';
    this.nameInput = '';
  }
}
