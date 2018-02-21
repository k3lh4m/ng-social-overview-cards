import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialOverviewRefreshUsersComponent } from './social-overview-refresh-users.component';

describe('SocialOverviewRefreshUsersComponent', () => {
  let component: SocialOverviewRefreshUsersComponent;
  let fixture: ComponentFixture<SocialOverviewRefreshUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialOverviewRefreshUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialOverviewRefreshUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
