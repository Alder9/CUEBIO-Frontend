import { TestBed, ComponentFixture ,async} from '@angular/core/testing';


import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { AppleService } from './apple.service';



// describe('AppleService', () => {
//   beforeEach(() => TestBed.configureTestingModule({}));
//   let service: AppleService;

//   it('should be created', () => {
//     service = TestBed.get(AppleService);
//     expect(service).toBeTruthy();
    
//   });
// });

describe('AppleService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AppleService]
  }));

   it('should be created', () => {
    const service: AppleService = TestBed.get(AppleService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: AppleService= TestBed.get(AppleService);
    expect(service.getApples).toBeTruthy();
   });

});

