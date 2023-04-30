import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AddCarFormComponent } from './add-car-form/add-car-form.component';
import { CarsComponent } from './cars/cars.component';
import { StaticFooterComponent } from './static-footer/static-footer.component';



@NgModule({
  declarations: [
    AppComponent,
    AddCarFormComponent,
    CarsComponent,
    StaticFooterComponent
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
