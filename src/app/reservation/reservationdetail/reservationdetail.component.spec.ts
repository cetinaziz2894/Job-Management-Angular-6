import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationdetailComponent } from './reservationdetail.component';

describe('ReservationdetailComponent', () => {
  let component: ReservationdetailComponent;
  let fixture: ComponentFixture<ReservationdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
