import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdunitComponent } from './adunit.component';

describe('AdunitComponent', () => {
  let component: AdunitComponent;
  let fixture: ComponentFixture<AdunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
