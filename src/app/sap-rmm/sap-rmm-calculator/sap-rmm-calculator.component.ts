import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SubmitConfirmDialogComponent } from '../../submit-confirm-dialog/submit-confirm-dialog.component';
import { SAPRMM } from '../sap-rmm.model';
import { SAPRMMService } from '../../services/sap-rmm.service';

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

  constructor(
    public dialog: MatDialog,
    public service: SAPRMMService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  private validateUntil(formControlName: string) {
    console.log(formControlName)
    const controlEntries = Object.entries(this.form.controls)
    for(const entry of controlEntries) {
      const name = entry[0]
      console.log(name)
      const control = entry[1]
      if(name !== formControlName)
        control.markAsTouched()
      else
        break
    }
  }

  private getFormData(): SAPRMM {
    return new SAPRMM(
      this.form.get('poolPercent').value,
      this.form.get('fmParticipationPercent').value,
      this.form.get('upbInvestorPriorAmount').value,
      this.form.get('mortgageUpbPriorAmount').value,
      this.form.get('upbCurrentAmount').value,
      this.form.get('piPaymentAmount').value,
      this.form.get('noteRate').value,
      this.form.get('poolTerm').value,
      this.form.get('poolPercent').value,
      this.form.get('maturityDate').value,
      this.form.get('noteMaturityDate').value,
      this.form.get('principalAmortizationCode').value,
      this.form.get('ddlpi').value,
      this.form.get('activeInactiveEditCode').value,
      this.form.get('upbAdjustmentAmountCurrent').value,
      this.form.get('loanStatus').value
    )
  }

  // Data entered in form
  get isValid(): boolean {
    return this.form.status != "INVALID"
  }

  onSubmit(event: Event): void {
    this.dialog
      .open(SubmitConfirmDialogComponent, {data: "Are you sure you wish to submit?"})
      .afterClosed()
      .subscribe((result)=>{
        if(result == "yes") {
          this.service.formState = this.getFormData()
          this.router.navigateByUrl('/sap-rmm-confirm')
        }
      })
  }
}
