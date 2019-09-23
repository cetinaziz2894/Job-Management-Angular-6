import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshottriggerComponent } from './screenshottrigger.component';

describe('ScreenshottriggerComponent', () => {
  let component: ScreenshottriggerComponent;
  let fixture: ComponentFixture<ScreenshottriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenshottriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenshottriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
