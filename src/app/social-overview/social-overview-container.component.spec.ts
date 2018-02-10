import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialOverviewContainerComponent } from './social-overview-container.component';

describe('SocialOverviewContainerComponent', () => {
  let component: SocialOverviewContainerComponent;
  let fixture: ComponentFixture<SocialOverviewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialOverviewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialOverviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
