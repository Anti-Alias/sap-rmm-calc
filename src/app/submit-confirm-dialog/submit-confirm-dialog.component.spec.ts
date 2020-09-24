import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitConfirmDialogComponent } from './submit-confirm-dialog.component';

describe('SubmitConfirmDialogComponent', () => {
  let component: SubmitConfirmDialogComponent;
  let fixture: ComponentFixture<SubmitConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
