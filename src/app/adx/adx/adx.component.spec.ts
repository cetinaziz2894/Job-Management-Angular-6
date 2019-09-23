import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdxComponent } from './adx.component';

describe('AdxComponent', () => {
  let component: AdxComponent;
  let fixture: ComponentFixture<AdxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
