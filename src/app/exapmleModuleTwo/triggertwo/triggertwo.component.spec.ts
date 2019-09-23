import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggertwoComponent } from './triggertwo.component';

describe('TriggertwoComponent', () => {
  let component: TriggertwoComponent;
  let fixture: ComponentFixture<TriggertwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggertwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
