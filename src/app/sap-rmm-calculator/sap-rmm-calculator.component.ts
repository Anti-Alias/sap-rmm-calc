import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SubmitConfirmDialogComponent } from '../submit-confirm-dialog/submit-confirm-dialog.component';

@Component({
  selector: 'app-sap-rmm-calculator',
  templateUrl: './sap-rmm-calculator.component.html',
  styleUrls: ['./sap-rmm-calculator.component.css']
})
export class SapRmmCalculatorComponent implements OnInit {

  // Fields that populate dropdowns. Stubs.
  poolPercents: number[] = [5, 10, 15]
  poolTerms: number[] = [1, 3, 5, 10, 15, 20, 25, 30]
  principalAmortizationCodes: string[] = ["1AC", "2AC", "3AC"]
  activeInactiveEditCodes: string[] = ["AE", "IAEC"]
  loanStatuses: string[] = ["Active", "Inactive"]

  // Form controls
  form = new FormGroup({
    poolPercent: new FormControl(null, [Validators.required]),
    fmParticipationPercent: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]),
    upbInvestorPriorAmount: new FormControl(null, [Validators.required, Validators.min(0)]),
    mortgageUpbPriorAmount: new FormControl(null, [Validators.required, Validators.min(0)]),
    upbCurrentAmount: new FormControl(null, [Validators.required, Validators.min(0)]),
    piPaymentAmount: new FormControl(null, [Validators.required, Validators.min(0)]),
    noteRate: new FormControl(null, [Validators.required, Validators.min(0)]),
    poolTerm: new FormControl(null, [Validators.required]),
    productCode: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    maturityDate: new FormControl(null, [Validators.required]),
    noteMaturityDate: new FormControl(null, [Validators.required]),
    principalAmortizationCode: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    ddlpi: new FormControl(null, [Validators.required]),
    activeInactiveEditCode: new FormControl(null, [Validators.required]),
    upbAdjustmentAmountCurrent: new FormControl(null, [Validators.required, Validators.min(0)]),
    loanStatus: new FormControl(null, [Validators.required])
  })

  // Data entered in form
  get isValid(): boolean {
    return true
    //return this.form.status != "INVALID"
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.form.get('poolPercent').valueChanges.subscribe(
      (result)=>{
        console.log(`Got result ${result}`)
        console.log(this.form.get('fmParticipationPercent').valid)
        console.log(this.form.status)
      },
      (error)=>{
        `Got error ${error}`
      }
    )
  }

  onSubmit(event: {}): void {
    this.dialog
      .open(SubmitConfirmDialogComponent)
      .afterClosed()
      .subscribe((result)=>{
        console.log(`Got result ${result}`)
      })
  }
}
