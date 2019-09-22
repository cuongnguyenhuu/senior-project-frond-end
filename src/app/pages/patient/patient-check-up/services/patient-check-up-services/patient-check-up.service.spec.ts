import { TestBed } from '@angular/core/testing';

import { PatientCheckUpService } from './patient-check-up.service';

describe('PatientCheckUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientCheckUpService = TestBed.get(PatientCheckUpService);
    expect(service).toBeTruthy();
  });
});
