import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailthreeComponent } from './detailthree.component';

describe('DetailthreeComponent', () => {
  let component: DetailthreeComponent;
  let fixture: ComponentFixture<DetailthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
