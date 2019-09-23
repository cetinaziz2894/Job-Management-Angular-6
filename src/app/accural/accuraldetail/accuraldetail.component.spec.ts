import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuraldetailComponent } from './accuraldetail.component';

describe('AccuraldetailComponent', () => {
  let component: AccuraldetailComponent;
  let fixture: ComponentFixture<AccuraldetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccuraldetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccuraldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
