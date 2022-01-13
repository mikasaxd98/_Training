import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginPageViewComponent } from './admin-login-page-view.component';

describe('AdminLoginPageViewComponent', () => {
  let component: AdminLoginPageViewComponent;
  let fixture: ComponentFixture<AdminLoginPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginPageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
