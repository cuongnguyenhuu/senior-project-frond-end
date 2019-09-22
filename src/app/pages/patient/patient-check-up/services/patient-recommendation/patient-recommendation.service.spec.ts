import { TestBed } from '@angular/core/testing';

import { PatientRecommendationService } from './patient-recommendation.service';

describe('PatientRecommendationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientRecommendationService = TestBed.get(PatientRecommendationService);
    expect(service).toBeTruthy();
  });
});
