import { Injectable } from '@angular/core';
import { Car } from './car'
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class carsService {
  cars: BehaviorSubject<Car[]> = new BehaviorSubject<Car[]>([{ Make: "lada", Model:"calina", Speed:1, Extras:[], Power:1 }])
  cars$: Observable<Car[]> = this.cars.asObservable()
  addCar(make: string, model: string, speed: number, power: number, extras: string[]) {
    let car: Car = {
      Make: make,
      Model: model,
      Speed: speed,
      Power: power,
      Extras: extras
    }
    this.cars$.pipe(take(1)).subscribe((arr) => {
      this.cars.next([...arr, car])
    })
  }
  removeCar(car: Car) {
    this.cars$.pipe(take(1)).subscribe((arr) => {
      arr.splice(arr.indexOf(car))
      this.cars.next(arr)
    })
  }
}
