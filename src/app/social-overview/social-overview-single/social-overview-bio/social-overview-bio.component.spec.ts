import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialOverviewBioComponent } from './social-overview-bio.component';

describe('SocialOverviewBioComponent', () => {
  let component: SocialOverviewBioComponent;
  let fixture: ComponentFixture<SocialOverviewBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialOverviewBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialOverviewBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
