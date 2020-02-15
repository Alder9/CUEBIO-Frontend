import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { InfoPanelService } from './info-panel.service';
import { Apple } from './apple';

describe('InfoPanelService', () => {


  beforeEach(() => { 
    
    TestBed.configureTestingModule({})

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


});
