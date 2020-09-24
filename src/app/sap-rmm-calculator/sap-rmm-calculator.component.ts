import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-sap-rmm-calculator',
  templateUrl: './sap-rmm-calculator.component.html',
  styleUrls: ['./sap-rmm-calculator.component.css']
})
export class SapRmmCalculatorComponent implements OnInit {

  // Fields that populate dropdowns
  poolPercents: number[] = [5, 10, 15]
  poolTerms: number[] = [1, 3, 5, 10, 15, 20, 25, 30]
  principalAmortizationCodes: string[] = ["1AC", "2AC", "3AC"]
  activeInactiveEditCodes: string[] = ["AE", "IAEC"]
  loanStatuses: string[] = ["Active", "Inactive"]

  // Form controls
  form = new FormGroup({
    poolPercent: new FormControl(null, [Validators.required]),
    fmParticipationPercent: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]),
    upbInvestorPriorAmount: new FormControl(null, [Validators.required]),
    mortgageUpbPriorAmount: new FormControl(null, [Validators.required]),
    upbCurrentAmount: new FormControl(null, [Validators.required]),
    piPaymentAmount: new FormControl(null, [Validators.required]),
    noteRate: new FormControl(null, [Validators.required]),
    poolTerm: new FormControl(null, [Validators.required]),
    productCode: new FormControl(null, [Validators.required]),
    maturityDate: new FormControl(null, [Validators.required]),
    noteMaturityDate: new FormControl(null, [Validators.required]),
    principalAmortizationCode: new FormControl(null, [Validators.required]),
    ddlpi: new FormControl(null, [Validators.required]),
    activeInactiveEditCode: new FormControl(null, [Validators.required]),
    upbAdjustmentAmountCurrent: new FormControl(null, [Validators.required]),
    loanStatus: new FormControl(null, [Validators.required])
  })

  // Data entered in form

  get poolPercent(): AbstractControl { return this.form.get('poolPercent') }

  constructor() { }

  ngOnInit(): void {
    this.poolPercent.valueChanges.subscribe(
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
  }

  get isValid(): boolean {
    return this.form.status != "INVALID"
  }
}
