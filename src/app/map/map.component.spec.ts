import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MapComponent } from './map.component';
import { By } from '@angular/platform-browser';
import { Apple } from '../apple';
import { InfoPanelService } from '../info-panel.service';
import { AppleService } from '../apple.service';


describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let debugElement: DebugElement;
  let htmlElement : HTMLElement;
  let useAppleStub: Partial<Apple>


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MapComponent 
      ],
      providers: [
        // {provide:Apple, useClass: AppleService}
        {provide:Apple, useValue: useAppleStub}
      ]

    }).compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should display the Tree ID on scree', () =>{
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('p').textContent).toContain("Tree Tag ID:")
//   })
});
