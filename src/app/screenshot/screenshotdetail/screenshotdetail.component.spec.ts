import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotdetailComponent } from './screenshotdetail.component';

describe('ScreenshotdetailComponent', () => {
  let component: ScreenshotdetailComponent;
  let fixture: ComponentFixture<ScreenshotdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenshotdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenshotdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
