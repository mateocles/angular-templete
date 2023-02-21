import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  name: string = 'Mateo';
  lastname: string = 'Ceballos';
  private years: number = 26;
  getYears(): number {
    return this.years;
  }
}
