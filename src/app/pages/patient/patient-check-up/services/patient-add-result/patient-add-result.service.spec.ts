import { TestBed } from '@angular/core/testing';

import { PatientAddResultService } from './patient-add-result.service';

describe('PatientAddResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientAddResultService = TestBed.get(PatientAddResultService);
    expect(service).toBeTruthy();
  });
});
