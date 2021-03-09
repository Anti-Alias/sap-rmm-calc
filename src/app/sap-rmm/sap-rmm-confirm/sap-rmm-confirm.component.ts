import {Component, OnInit} from '@angular/core';
import { SAPRMMService } from '../../services/sap-rmm.service';
import { MatDialog } from '@angular/material/dialog'
import { SubmitConfirmDialogComponent } from 'src/app/submit-confirm-dialog/submit-confirm-dialog.component';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { filter, mergeMap } from 'rxjs/operators'
import { Router } from '@angular/router';
import { AcknowledgeDialogComponent } from 'src/app/acknowledge-dialog/acknowledge-dialog.component';
import { SAPRMM, SAPRMMSubData } from '../sap-rmm.model';

@Component({
  selector: 'app-sapp-rmm-confirm',
  styleUrls: ['sap-rmm-confirm.component.css'],
  templateUrl: 'sap-rmm-confirm.component.html',
})
export class SapRmmConfirmComponent implements OnInit {

  dataSource: SAPRMMSubData[]

  constructor(
    public dialog: MatDialog,
    private saprmmService: SAPRMMService,
    private dataStorageService: DataStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataStorageService.retrieveAllSAPRMM().subscribe(dbData => {
      let data = !this.saprmmService.editMode ? [this.saprmmService.formState] : []
      if(dbData)
        data = data.concat(dbData)
      if(this.saprmmService.editMode)
        this.updateList(data);
      this.dataSource = data.map(elem => SAPRMM.toSubData(elem))
    })
  }

  updateList(data: SAPRMM[]) {
    console.log(this.saprmmService.formState)
    for(let i=0; i<data.length; i++) {
      let elem = data[i];
      if(elem.id == this.saprmmService.formState.id) {
        data[i] = this.saprmmService.formState;
      }
    }
  }

  /**
   * Invoked when confirm button is pressed.
   * Naviages to dashboard if finished successfully.
   */
  onConfirm(event: Event): void {
    let fs = this.saprmmService.formState;
    this.dialog
      .open(SubmitConfirmDialogComponent, {data: "Are you sure you want to confirm transaction?"})        // Asks user to confirm transaction
      .afterClosed()
      .pipe(filter(dialogueAnswer => dialogueAnswer === 'yes'))                                           // Filters out non-yes answer.
      .pipe(mergeMap(_ => {
        if(!this.saprmmService.editMode)
          return this.dataStorageService.storeSAPRMM(fs)
        else
          return this.dataStorageService.updateSAPRMM(fs.id, SAPRMM.toSubData(fs))
      }))  // Stores/updates result in DB
      .pipe(mergeMap( _ => {                                                                              // Had user acknowledge transaction
        return this.dialog.open(
          AcknowledgeDialogComponent,
          {data: "Transaction submitted"}).afterClosed()
      }))
      .subscribe(_ => { this.router.navigateByUrl('/')})                                                  // Finished and goes to home page
  }
};