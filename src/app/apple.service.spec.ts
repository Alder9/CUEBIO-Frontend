import { TestBed } from '@angular/core/testing';

import { AppleService } from './apple.service';

describe('AppleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppleService = TestBed.get(AppleService);
    expect(service).toBeTruthy();
  });
});
