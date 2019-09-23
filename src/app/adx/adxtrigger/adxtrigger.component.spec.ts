import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdxtriggerComponent } from './adxtrigger.component';

describe('AdxtriggerComponent', () => {
  let component: AdxtriggerComponent;
  let fixture: ComponentFixture<AdxtriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdxtriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdxtriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
