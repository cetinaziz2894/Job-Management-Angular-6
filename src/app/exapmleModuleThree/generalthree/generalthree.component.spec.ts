import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralthreeComponent } from './generalthree.component';

describe('GeneralthreeComponent', () => {
  let component: GeneralthreeComponent;
  let fixture: ComponentFixture<GeneralthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
