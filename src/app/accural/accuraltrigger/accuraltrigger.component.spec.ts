import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuraltriggerComponent } from './accuraltrigger.component';

describe('AccuraltriggerComponent', () => {
  let component: AccuraltriggerComponent;
  let fixture: ComponentFixture<AccuraltriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccuraltriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccuraltriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
