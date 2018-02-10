import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialOverviewSingleComponent } from './social-overview-single.component';

describe('SocialOverviewSingleComponent', () => {
  let component: SocialOverviewSingleComponent;
  let fixture: ComponentFixture<SocialOverviewSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialOverviewSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialOverviewSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
