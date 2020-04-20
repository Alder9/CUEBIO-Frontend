import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { InfoPanelService } from './info-panel.service';
import { Apple } from '../apple';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


describe('InfoPanelService', () => {
 
  let apple : Apple;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => { TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InfoPanelService]
    }).compileComponents();
    
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

    apple = {  "tree_tag_id": 100,
      "genetics": "Malus",
      "species": "domestica",
      "finalCultivar": "Ben Davis",
      "synonym": "New York Pippin, Kentucky Red",
      "isConfirmed": "C",
      "use": "dessert, cider",
      "country": "United States",
      "genotypes": 3136,
      "propertyOwner": "public",
      "treeSiteLocation": "Dunn House",
      "treeLatitude": 39.9391806,
      "treeLongitude": -105.2603118,
      "treeHeight": 20,
      "treeDripLine": 14,
      "trunkDiameter": 20.25,
      "fireBlight": 0,
      "fruitHanging": "1001-10000"
    };

  });
 
  it('should be created', () => {
    const service: InfoPanelService = TestBed.get(InfoPanelService);
    expect(service).toBeTruthy();
    
  });

  it('show should be false', () => {
    const service: InfoPanelService = TestBed.get(InfoPanelService);
    expect(service.show).toBeFalsy();
    
  });

  it('showPanel should be true', () => {
    const service: InfoPanelService = TestBed.get(InfoPanelService);
    expect(service.showPanel).toBeTruthy();
    
  });

  it('should have add function', () => {
    const service: InfoPanelService = TestBed.get(InfoPanelService);
    expect(service.add).toBeTruthy();
    
  });


  it('apple should actual apple', () => {
    const service: InfoPanelService = TestBed.get(InfoPanelService);
    service.add(apple);
    expect(service.apple).actual;
    expect(service.apple).toBe(apple);    
  });


});
