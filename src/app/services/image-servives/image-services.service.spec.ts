import { TestBed } from '@angular/core/testing';

import { ImageServicesService } from './image-services.service';

describe('ImageServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageServicesService = TestBed.get(ImageServicesService);
    expect(service).toBeTruthy();
  });
});
