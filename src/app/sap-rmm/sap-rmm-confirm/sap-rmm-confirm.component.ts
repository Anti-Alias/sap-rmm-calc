import {Component, OnInit} from '@angular/core';
import { SAPRMMService } from '../sap-rmm.service';

export interface SAPRMMSubData {
  saprmmid: string;
  upb: number;
  rmm: string;
  loanStatus: string,
  upbCurrentAmount: number,
  maturityDate: Date,
  poolTerm: number
}

@Component({
  selector: 'app-sapp-rmm-confirm',
  styleUrls: ['sap-rmm-confirm.component.css'],
  templateUrl: 'sap-rmm-confirm.component.html',
})
export class SapRmmConfirmComponent implements OnInit {

  displayedColumns: string[] = ['saprmmid', 'upb', 'rmm', 'loanStatus', 'upbCurrentAmount', 'maturityDate', 'poolTerm'];
  dataSource: SAPRMMSubData[]

  constructor(private service: SAPRMMService) {}

  ngOnInit(): void {
    const data = this.service.formState
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