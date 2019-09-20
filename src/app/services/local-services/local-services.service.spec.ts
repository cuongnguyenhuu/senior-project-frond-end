import { TestBed } from '@angular/core/testing';

import { LocalServicesService } from './local-services.service';

describe('LocalServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalServicesService = TestBed.get(LocalServicesService);
    expect(service).toBeTruthy();
  });
});
