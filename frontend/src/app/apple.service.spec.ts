import { TestBed, ComponentFixture ,async} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Apple } from './apple';
import { AppleService } from './apple.service';



describe('AppleService', () => {

  let service: AppleService;
    
  let apple : Apple[] = [{  "tree_tag_id": 100,
      "genetics": "Malus",
      "species": "domestica",
      "finalCultivar": "Ben Davis",
      "synonym": "New York Pippin, Kentucky Red",
      "isConfirmed": "C",
      "use": "dessert, cider",
      "country": "United States",
      "genotypes": 3136,
      // "tree_tag_id": 100,
      "propertyOwner": "public",
      "treeSiteLocation": "Dunn House",
      "treeLatitude": 39.9391806,
      "treeLongitude": -105.2603118,
      "treeHeight": 20,
      "treeDripLine": 14,
      "trunkDiameter": 20.25,
      "fireBlight": 0,
      "fruitHanging": "1001-10000"
    }];

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AppleService]
  }));

   it('should be created', () => {
      const service: AppleService = TestBed.get(AppleService);
      expect(service).toBeTruthy();
   });

   it('should have getApples function', () => {
      const service: AppleService = TestBed.get(AppleService);
      expect(service.getApples).toBeTruthy();
   });

  //  it('getApples function should contain apples', () => {
  //     const service: AppleService = TestBed.get(AppleService);
  //     expect(service.getApples).toContain(apple);
  //  });


  
});



