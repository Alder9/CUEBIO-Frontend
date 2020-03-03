import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { MapComponent } from './map.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Apple } from '../apple';
;





describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  
  let apple : Apple[] = [{  "id": 100,
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





  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      imports:[RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create MapComponent ', () => {
    expect(component).toBeTruthy();
  });

  it('should create marker' , () => {
    expect(component.markers).toBeTruthy();
  });


  it('should have getApples function', () => {
    expect(component.getApples).toBeTruthy();
    
   });

   it('should have getRandomAdjustment function', () => {
    expect(component.getRandomAdjustment).toBeTruthy();
    
   });

   it('should create ngOnInit function' , () => {
    expect(component.ngOnInit).toBeTruthy();
  });


   it('should have getApple of AppleMarker function', () => {
      var appleDist = component.AppleMarker.apple
      expect(component.AppleMarker.getApple).toEqual(appleDist);
   });

   
   it('should have getMap function', () => {
   
      expect(component.getMap).toBeDefined();
      expect(component.getMap).toBeTruthy();
   });

 
});