import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiterComponent } from './fiter.component';

describe('FiterComponent', () => {
  let component: FiterComponent;
  let fixture: ComponentFixture<FiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
