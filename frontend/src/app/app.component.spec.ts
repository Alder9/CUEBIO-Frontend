import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfoPanelComponent} from './info-panel/info-panel.component';
import { MapComponent} from './map/map.component';
import { FilterComponent } from './filter/filter.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture : ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        InfoPanelComponent,
        MapComponent,
        FilterComponent
      ],
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create show boolean to be true', () => {
    expect(component.show).toEqual(true);
  });


});