import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomertriggerComponent } from './customertrigger.component';

describe('CustomertriggerComponent', () => {
  let component: CustomertriggerComponent;
  let fixture: ComponentFixture<CustomertriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomertriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomertriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
