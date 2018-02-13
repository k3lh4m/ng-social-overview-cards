import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialOverviewEditUserComponent } from './social-overview-edit-user.component';

describe('SocialOverviewEditUserComponent', () => {
  let component: SocialOverviewEditUserComponent;
  let fixture: ComponentFixture<SocialOverviewEditUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialOverviewEditUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialOverviewEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
