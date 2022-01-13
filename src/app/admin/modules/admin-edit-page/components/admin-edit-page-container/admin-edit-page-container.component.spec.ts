import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPageContainerComponent } from './admin-edit-page-container.component';

describe('AdminEditPageContainerComponent', () => {
  let component: AdminEditPageContainerComponent;
  let fixture: ComponentFixture<AdminEditPageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditPageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
