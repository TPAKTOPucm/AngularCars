import { Component, Input } from '@angular/core';
import { carsService } from '../cars.service';

@Component({
  selector: 'app-add-car-form',
  templateUrl: './add-car-form.component.html',
  styleUrls: ['./add-car-form.component.css']
})
export class AddCarFormComponent {
  @Input() make!: string
  @Input() model!: string
  @Input() speed!: number
  @Input() power!: number
  @Input() extra!: string
  constructor(private service: carsService) { }
  addCar() {
    console.log(this.make)
    this.service.addCar(this.make, this.model, this.speed, this.power, this.extra.split("\n"))
  }
}
