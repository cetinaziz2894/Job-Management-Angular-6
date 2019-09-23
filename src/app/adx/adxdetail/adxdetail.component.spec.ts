import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdxdetailComponent } from './adxdetail.component';

describe('AdxdetailComponent', () => {
  let component: AdxdetailComponent;
  let fixture: ComponentFixture<AdxdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdxdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdxdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
