import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuralComponent } from './accural.component';

describe('AccuralComponent', () => {
  let component: AccuralComponent;
  let fixture: ComponentFixture<AccuralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccuralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
