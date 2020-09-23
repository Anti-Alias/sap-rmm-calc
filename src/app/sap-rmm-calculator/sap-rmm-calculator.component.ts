import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sap-rmm-calculator',
  templateUrl: './sap-rmm-calculator.component.html',
  styleUrls: ['./sap-rmm-calculator.component.css']
})
export class SapRmmCalculatorComponent implements OnInit {

  poolPercents: Number[] = [5, 10, 15]
  poolTerms: Number[] = [1, 3, 5, 10, 15, 20, 25, 30]

  fmParticipationPercent?: Number = null
  upbInvestorPriorAmount?: Number = null
  mortgageUpbPriorAmount?: Number = null
  upbCurrentAmount?: Number = null
  piPaymentAmount?: Number = null
  noteRate?: Number = null
  poolTerm?: Number = null

  constructor() { }

  ngOnInit(): void {
  }
}
