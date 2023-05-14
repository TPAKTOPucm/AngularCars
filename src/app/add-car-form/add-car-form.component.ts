import { Component } from '@angular/core';
import { carsService } from '../cars.service';

@Component({
  selector: 'app-add-car-form',
  templateUrl: './add-car-form.component.html',
  styleUrls: ['./add-car-form.component.css']
})
export class AddCarFormComponent {
  constructor(private service: carsService) { }
  addCar(make: HTMLInputElement, model: HTMLInputElement, speed: HTMLInputElement, power: HTMLInputElement, extras: HTMLInputElement) {
    this.service.addCar(make.value, model.value, parseInt(speed.value), parseInt(power.value), extras.value.split("\n"))
  }
}
