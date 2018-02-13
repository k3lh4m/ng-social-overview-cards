import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialOverviewDeleteUserComponent } from './social-overview-delete-user.component';

describe('SocialOverviewDeleteUserComponent', () => {
  let component: SocialOverviewDeleteUserComponent;
  let fixture: ComponentFixture<SocialOverviewDeleteUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialOverviewDeleteUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialOverviewDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
