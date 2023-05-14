import { TestBed } from '@angular/core/testing';

import { carsService } from './cars.service';

describe('ServiceService', () => {
  let service: carsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(carsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
