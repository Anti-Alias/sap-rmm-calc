import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapRmmConfirmComponent } from './sap-rmm-confirm.component';

describe('SapRmmConfirmComponent', () => {
  let component: SapRmmConfirmComponent;
  let fixture: ComponentFixture<SapRmmConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapRmmConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SapRmmConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
