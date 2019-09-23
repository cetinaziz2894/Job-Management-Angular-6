import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaigntriggerComponent } from './campaigntrigger.component';

describe('CampaigntriggerComponent', () => {
  let component: CampaigntriggerComponent;
  let fixture: ComponentFixture<CampaigntriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaigntriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaigntriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
