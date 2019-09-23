import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationtriggerComponent } from './reservationtrigger.component';

describe('ReservationtriggerComponent', () => {
  let component: ReservationtriggerComponent;
  let fixture: ComponentFixture<ReservationtriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationtriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationtriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
