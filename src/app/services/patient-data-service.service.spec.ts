import { TestBed } from '@angular/core/testing';

import { PatientDataServiceService } from './patient-data-service.service';

describe('PatientDataServiceService', () => {
  let service: PatientDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
