import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../car';
import { carsService } from '../cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars$: Observable<Car[]>
  constructor(private service: carsService) {
    this.cars$ = this.service.cars$
  }
}
