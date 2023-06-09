import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AddCarFormComponent } from './add-car-form/add-car-form.component';
import { CarsComponent } from './cars/cars.component';
import { StaticFooterComponent } from './static-footer/static-footer.component';
import { CarComponent } from './car/car.component';



@NgModule({
  declarations: [
    AppComponent,
    AddCarFormComponent,
    CarsComponent,
    StaticFooterComponent,
    CarComponent
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
