import { Component } from '@angular/core';
import { carsService } from '../cars.service';

@Component({
  selector: 'app-add-car-form',
  templateUrl: './add-car-form.component.html',
  styleUrls: ['./add-car-form.component.css']
})
export class AddCarFormComponent {
  Make!: string
  Model!: string
  Speed!: number
  Power!: number
  Extra!: string
  constructor(private service: carsService) { }
  addCar() {
    console.log(this.Make)
    this.service.addCar(this.Make, this.Model, this.Speed, this.Power, this.Extra.split("\n"))
  }
}
