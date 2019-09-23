import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerthreeComponent } from './triggerthree.component';

describe('TriggerthreeComponent', () => {
  let component: TriggerthreeComponent;
  let fixture: ComponentFixture<TriggerthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggerthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
