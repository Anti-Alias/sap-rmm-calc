import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SubmitConfirmDialogComponent } from '../../submit-confirm-dialog/submit-confirm-dialog.component';
import { SAPRMM } from '../sap-rmm.model';
import { SAPRMMService } from '../../services/sap-rmm.service';
import { mergeMap, filter } from 'rxjs/operators';
import { AcknowledgeDialogComponent } from 'src/app/acknowledge-dialog/acknowledge-dialog.component';

@Component({
  selector: 'app-sap-rmm-calculator',
  templateUrl: './sap-rmm-calculator.component.html',
  styleUrls: ['./sap-rmm-calculator.component.css']
})
export class SapRmmCalculatorComponent {

  bl: BusinessLogic;

  constructor(
    dialog: MatDialog,
    service: SAPRMMService,
    router: Router,
  ) {
    this.bl = new BusinessLogic(dialog, service, router)
  }
}

class BusinessLogic {

  constructor(
    private dialog: MatDialog,
    private service: SAPRMMService,
    private router: Router
  ) {}
  
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

  /**
   * Validates form elements from top to bottom until a form element with the given name is specified.
   * @param formControlName Control name to stop at.
   */
  validateUntil(formControlName: string) {
    const controlEntries = Object.entries(this.form.controls)
    for(const entry of controlEntries) {
      const name = entry[0]
      const control = entry[1]
      if(name !== formControlName)
        control.markAsTouched()
      else
        break
    }
  }

    /**
   * @return true if form is value.
   */
  get isValid(): boolean {
    return this.form.status != "INVALID"
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
      this.form.get('productCode').value,
      new Date(this.form.get('maturityDate').value),
      new Date(this.form.get('noteMaturityDate').value),
      this.form.get('principalAmortizationCode').value,
      new Date(this.form.get('ddlpi').value),
      this.form.get('activeInactiveEditCode').value,
      this.form.get('upbAdjustmentAmountCurrent').value,
      this.form.get('loanStatus').value
    )
  }

    /**
   * Invoked when submit button is pressed.
   */
  onSubmit(event: Event): void {
    this.dialog
      .open(SubmitConfirmDialogComponent, {data: "Are you sure you wish to submit?"})
      .afterClosed()
      .pipe(filter(result => result === "yes"))
      .pipe(mergeMap(_ => this.dialog.open(AcknowledgeDialogComponent, {data: "Data submitted"}).afterClosed()))
      .subscribe(_ => {
        this.service.formState = this.getFormData()
        this.router.navigateByUrl('/sap-rmm-confirm')
      })
  }
}