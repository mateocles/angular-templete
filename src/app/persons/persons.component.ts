import { Component } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent {
  disabled = false;
  message = 'No ha agregado ninguna persona';
  title = '';
  addPerson() {
    this.message = 'Se ha agrego una persona';
    console.log('add');
  }
  changeTitle(e: Event) {
    this.title = 	(<HTMLInputElement> e.target).value;
  }
}
