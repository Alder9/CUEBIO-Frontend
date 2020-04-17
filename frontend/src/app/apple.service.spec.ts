import { TestBed, ComponentFixture ,async} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Apple } from './apple';
import { AppleService } from './apple.service';
import { HttpClient } from '@angular/common/http';

describe('AppleService', () => {

  let service: AppleService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AppleService]
  });
  
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController); 
});

   it('should be created', () => {
      const service: AppleService = TestBed.get(AppleService);
      expect(service).toBeTruthy();
   });

   it('should have getApples function', () => {
      const service: AppleService = TestBed.get(AppleService);
      expect(service.getApples).toBeTruthy();
   });

});



