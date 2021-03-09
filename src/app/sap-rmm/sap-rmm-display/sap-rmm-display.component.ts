import { Component, Input } from '@angular/core';
import { SAPRMMService } from 'src/app/services/sap-rmm.service';
import { SAPRMM, SAPRMMSubData } from 'src/app/sap-rmm/sap-rmm.model'
import { DataStorageService } from 'src/app/services/data-storage.service';
import { map } from 'rxjs/operators';


/**
 * Represents a reusable component that displays SapRmm data in tabular form with pagination.
 */
@Component({
  selector: 'app-sap-rmm-display',
  templateUrl: './sap-rmm-display.component.html',
  styleUrls: ['./sap-rmm-display.component.css']
})
export class SapRmmDisplayComponent {

  @Input() dataSource: SAPRMMSubData[]
  displayedColumns: string[] = ['saprmmid', 'upb', 'loanStatus', 'upbCurrentAmount', 'maturityDate', 'poolTerm', 'poolPercentage', 'action'];

  constructor(
    private saprmmService: SAPRMMService,
    private dataStorageService: DataStorageService
  ) {}

  deleteRow(elementToDelete: SAPRMMSubData) {
    this.dataStorageService
      .deleteSAPRMM(elementToDelete.saprmmid)
      .pipe(map(_ => { this.onFinishDelete(elementToDelete) }))
      .subscribe()
  }

  onFinishDelete(elementToDelete: SAPRMMSubData) {
    let copy =  [...this.dataSource];
    let idx: number = copy.indexOf(elementToDelete);
    if(idx == -1)
      throw new Error("Element not found");
    copy.splice(idx, 1)
    this.dataSource = copy;
  }

  editRow(elementToEdit: SAPRMM) {
    console.log(`Editing ${elementToEdit}`);
  }
}