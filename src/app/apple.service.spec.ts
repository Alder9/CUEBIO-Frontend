import { TestBed, ComponentFixture ,async} from '@angular/core/testing';

import { AppleService } from './apple.service';

import { Apple } from './apple';
import { APPLES } from './mock-apples';

describe('AppleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  let service: AppleService;

  it('should be created', () => {
    service = TestBed.get(AppleService);
    expect(service).toBeTruthy();
    
  });
});

