import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtwoComponent } from './detailtwo.component';

describe('DetailtwoComponent', () => {
  let component: DetailtwoComponent;
  let fixture: ComponentFixture<DetailtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
