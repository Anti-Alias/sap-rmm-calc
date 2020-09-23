import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapRmmCalculatorComponent } from './sap-rmm-calculator.component';

describe('SapRmmCalculatorComponent', () => {
  let component: SapRmmCalculatorComponent;
  let fixture: ComponentFixture<SapRmmCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapRmmCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SapRmmCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
