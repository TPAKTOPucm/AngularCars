import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car'
import { carsService } from '../cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  @Input() car!: Car
  ngOnInit() { }
  constructor(private service: carsService) {}
  deleteMe() {
    this.service.removeCar(this.car)
  }
}
