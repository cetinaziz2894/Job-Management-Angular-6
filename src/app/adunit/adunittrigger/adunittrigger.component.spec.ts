import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdunittriggerComponent } from './adunittrigger.component';

describe('AdunittriggerComponent', () => {
  let component: AdunittriggerComponent;
  let fixture: ComponentFixture<AdunittriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdunittriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdunittriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
