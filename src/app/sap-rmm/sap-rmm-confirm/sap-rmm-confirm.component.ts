import {Component, OnInit} from '@angular/core';
import { SAPRMMService } from '../../services/sap-rmm.service';
import { MatDialog } from '@angular/material/dialog'
import { SubmitConfirmDialogComponent } from 'src/app/submit-confirm-dialog/submit-confirm-dialog.component';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { filter, map, mergeMap } from 'rxjs/operators'
import { Router } from '@angular/router';

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

  constructor(
    public dialog: MatDialog,
    private saprmmService: SAPRMMService,
    private dataStorageService: DataStorageService,
    private router: Router
  ) {}

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

  onConfirm(event: Event): void {
    this.dialog
      .open(SubmitConfirmDialogComponent, {data: "Are you sure you want to confirm transaction?"})
      .afterClosed()
      .pipe(filter(dialogueAnswer => dialogueAnswer === 'yes'))
      .pipe(mergeMap(_ => { return this.dataStorageService.storeSAPRMM(this.saprmmService.formState) }))
      .subscribe(result => { this.router.navigateByUrl('/')})
  }
}