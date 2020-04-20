import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPanelComponent } from './info-panel.component';
import { InfoPanelService } from '../services/info-panel.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InfoPanelComponent', () => {
  let component: InfoPanelComponent;
  let inforService : InfoPanelService;
  let fixture: ComponentFixture<InfoPanelComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPanelComponent ],
      imports: [HttpClientTestingModule]
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

});
