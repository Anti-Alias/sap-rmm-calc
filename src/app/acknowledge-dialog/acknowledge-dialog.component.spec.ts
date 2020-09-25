import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgeDialogComponent } from './acknowledge-dialog.component';

describe('AcknowledgeDialogComponent', () => {
  let component: AcknowledgeDialogComponent;
  let fixture: ComponentFixture<AcknowledgeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcknowledgeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcknowledgeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
