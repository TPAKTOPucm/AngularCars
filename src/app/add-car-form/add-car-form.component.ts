import { Component, Input } from '@angular/core';
import { carsService } from '../cars.service';

@Component({
  selector: 'app-add-car-form',
  templateUrl: './add-car-form.component.html',
  styleUrls: ['./add-car-form.component.css'],
  //template: `<input type="text" value="{{Make}}" />`
             //<input type="text" value="{{Model}}" />
             //<input type="number" value="{{Speed}}" />
             //<input type="number" value="{{Power}}" />
             //<textarea value="{{Extra}}" />`
})
export class AddCarFormComponent {
  @Input() make: string = "Nissan"
  @Input() model: string = "Qashqai"
  @Input() speed: number = 220
  @Input() power: number  = 150
  @Input() extra: string = "Кондиционер\nподогрев сидений"
  constructor(private service: carsService) { }
  addCar() {
    console.log(this.make)
    this.service.addCar(this.make, this.model, this.speed, this.power, this.extra.split("\n"))
  }
}
