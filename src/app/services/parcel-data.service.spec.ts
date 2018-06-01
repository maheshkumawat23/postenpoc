import { TestBed, inject } from '@angular/core/testing';

import { ParcelDataService } from './parcel-data.service';

describe('ParcelDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParcelDataService]
    });
  });

  it('should be created', inject([ParcelDataService], (service: ParcelDataService) => {
    expect(service).toBeTruthy();
  }));
});
