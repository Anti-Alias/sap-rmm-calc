import { Component, OnInit, Input } from '@angular/core';

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

  // Data entered in form
  poolPercent?: number = null
  fmParticipationPercent?: number = null
  upbInvestorPriorAmount?: number = null
  mortgageUpbPriorAmount?: number = null
  upbCurrentAmount?: number = null
  piPaymentAmount?: number = null
  noteRate?: number = null
  poolTerm?: number = null
  productCode?: string = null
  maturityDate?: string = null
  noteMaturityDate?: string = null
  principalAmortizationCode?: string = null
  ddlpi?: string = null
  activeInactiveEditCode?: string = null
  upbAdjustmentAmountCurrent?: number = null
  loanStatus?: string = null

  // Helper vars
  allFieldsPopulated: boolean = false

  constructor() { }

  ngOnInit(): void { }

  onChange(event: {}) {
    this.allFieldsPopulated =
      this.poolPercent != null &&
      this.fmParticipationPercent != null &&
      this.upbInvestorPriorAmount != null &&
      this.mortgageUpbPriorAmount != null &&
      this.upbCurrentAmount != null &&
      this.piPaymentAmount != null &&
      this.noteRate != null &&
      this.poolTerm != null &&
      this.productCode != null &&
      this.maturityDate != null &&
      this.noteMaturityDate != null &&
      this.principalAmortizationCode != null &&
      this.ddlpi != null &&
      this.activeInactiveEditCode != null &&
      this.upbAdjustmentAmountCurrent != null &&
      this.loanStatus != null
  }
}
