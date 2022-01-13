import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPageContainerComponent } from './admin-add-page-container.component';

describe('AdminAddPageContainerComponent', () => {
  let component: AdminAddPageContainerComponent;
  let fixture: ComponentFixture<AdminAddPageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddPageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
