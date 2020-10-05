import { Component, Input } from '@angular/core';
import { SAPRMMService } from 'src/app/services/sap-rmm.service';
import { SAPRMMSubData } from 'src/app/sap-rmm/sap-rmm.model'


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
  displayedColumns: string[] = ['saprmmid', 'upb', 'rmm', 'loanStatus', 'upbCurrentAmount', 'maturityDate', 'poolTerm'];

  constructor(private saprmmService: SAPRMMService) {}

}