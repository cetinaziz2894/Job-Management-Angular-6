import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdunitdetailComponent } from './adunitdetail.component';

describe('AdunitdetailComponent', () => {
  let component: AdunitdetailComponent;
  let fixture: ComponentFixture<AdunitdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdunitdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdunitdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
