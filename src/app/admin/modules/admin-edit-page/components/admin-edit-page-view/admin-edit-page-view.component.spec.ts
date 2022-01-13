import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPageViewComponent } from './admin-edit-page-view.component';

describe('AdminEditPageViewComponent', () => {
  let component: AdminEditPageViewComponent;
  let fixture: ComponentFixture<AdminEditPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditPageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
