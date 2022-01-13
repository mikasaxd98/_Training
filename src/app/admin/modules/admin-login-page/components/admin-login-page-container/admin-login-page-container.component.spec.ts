import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginPageContainerComponent } from './admin-login-page-container.component';

describe('AdminLoginPageContainerComponent', () => {
  let component: AdminLoginPageContainerComponent;
  let fixture: ComponentFixture<AdminLoginPageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginPageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
