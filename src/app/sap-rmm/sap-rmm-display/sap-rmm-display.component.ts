import { Component, OnInit } from '@angular/core';
import { SAPRMMService } from 'src/app/services/sap-rmm.service';


/**
 * Represents a reusable component that displays SapRmm data in tabular form with pagination.
 */
@Component({
  selector: 'app-sap-rmm-display',
  templateUrl: './sap-rmm-display.component.html',
  styleUrls: ['./sap-rmm-display.component.css']
})
export class SapRmmDisplayComponent implements OnInit {

  displayedColumns: string[] = ['saprmmid', 'upb', 'rmm', 'loanStatus', 'upbCurrentAmount', 'maturityDate', 'poolTerm'];
  dataSource: SAPRMMSubData[]

  constructor(private saprmmService: SAPRMMService) {}

  ngOnInit(): void {
    const data = this.saprmmService.formState
    this.dataSource = [
      {
        saprmmid: "STUB",
        upb: data.upbAdjustmentAmountCurrent,
        rmm: "STUB",
        loanStatus: data.loanStatus,
        upbCurrentAmount: data.upbCurrentAmount,
        maturityDate: data.maturityDate,
        poolTerm: data.poolTerm
      }
    ]
  }
}

/**
 * A subset of the SAPRMM model data that is to be displayed on the screen.
 */
interface SAPRMMSubData {
  saprmmid: string;
  upb: number;
  rmm: string;
  loanStatus: string,
  upbCurrentAmount: number,
  maturityDate: Date,
  poolTerm: number
}