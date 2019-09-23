import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraltwoComponent } from './generaltwo.component';

describe('GeneraltwoComponent', () => {
  let component: GeneraltwoComponent;
  let fixture: ComponentFixture<GeneraltwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneraltwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneraltwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
