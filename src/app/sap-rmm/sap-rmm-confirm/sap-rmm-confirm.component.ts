import {Component} from '@angular/core';

export interface SAPRMMSubData {
  saprmmid: string;
  upb: number;
  rmm: string;
  loanStatus: string,
  upbCurrentAmount: number,
  maturityDate: Date,
  poolTerm: Date
}

@Component({
  selector: 'app-sapp-rmm-confirm',
  styleUrls: ['sap-rmm-confirm.component.css'],
  templateUrl: 'sap-rmm-confirm.component.html',
})
export class SapRmmConfirmComponent {
  displayedColumns: string[] = ['saprmmid', 'upb', 'rmm', 'loanStatus', 'upbCurrentAmount', 'maturityDate', 'poolTerm'];
  dataSource: SAPRMMSubData[] = [
    {
      saprmmid: 'abc123',
      upb: 100,
      rmm: 'abc123',
      loanStatus: 'Active',
      upbCurrentAmount: 3,
      maturityDate: new Date("2015-03-25"),
      poolTerm: new Date("2015-03-25")
    }
  ];
}

interface SAPRMMSubData2 {
  saprmmid: string,
  upb: number,
  rmm: string,
  loanStatus: string,
  upbCurrentAmount: number,
  maturityDate: Date,
  poolTerm: Date
}