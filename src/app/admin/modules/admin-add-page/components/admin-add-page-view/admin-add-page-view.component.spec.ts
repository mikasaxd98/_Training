import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPageViewComponent } from './admin-add-page-view.component';

describe('AdminAddPageViewComponent', () => {
  let component: AdminAddPageViewComponent;
  let fixture: ComponentFixture<AdminAddPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddPageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
