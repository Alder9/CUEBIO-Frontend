import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPanelComponent } from './info-panel.component';
import { Apple } from '../apple';
import { InfoPanelService } from '../info-panel.service';

describe('InfoPanelComponent', () => {
  let component: InfoPanelComponent;
  let inforService : InfoPanelService;
  let fixture: ComponentFixture<InfoPanelComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should getGenotypes function to be NA', () => {
  //   let apple : Apple = {  "id": 100,
  //   "genetics": "Malus",
  //   "species": "domestica",
  //   "finalCultivar": "Ben Davis",
  //   "synonym": "New York Pippin, Kentucky Red",
  //   "isConfirmed": "C",
  //   "use": "dessert, cider",
  //   "country": "United States",
  //   "genotypes": 3136,
  //   "tree_tag_id": 100,
  //   "propertyOwner": "public",
  //   "treeSiteLocation": "Dunn House",
  //   "treeLatitude": 39.9391806,
  //   "treeLongitude": -105.2603118,
  //   "treeHeight": 20,
  //   "treeDripLine": 14,
  //   "trunkDiameter": 20.25,
  //   "fireBlight": 0,
  //   "fruitHanging": "1001-10000"
  // };
  //   // apple.genotypes = 3136;
  //   // apple.country = "United States";
    
  //   component.add(apple);
  //   expect(component.getGenotypes).toEqual(3136);
  // });



});
