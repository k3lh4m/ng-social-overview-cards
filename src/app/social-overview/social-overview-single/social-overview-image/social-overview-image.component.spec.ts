import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialOverviewImageComponent } from './social-overview-image.component';

describe('SocialOverviewImageComponent', () => {
  let component: SocialOverviewImageComponent;
  let fixture: ComponentFixture<SocialOverviewImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialOverviewImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialOverviewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
