import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialOverviewSocialStatsComponent } from './social-overview-social-stats.component';

describe('SocialOverviewSocialStatsComponent', () => {
  let component: SocialOverviewSocialStatsComponent;
  let fixture: ComponentFixture<SocialOverviewSocialStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialOverviewSocialStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialOverviewSocialStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
