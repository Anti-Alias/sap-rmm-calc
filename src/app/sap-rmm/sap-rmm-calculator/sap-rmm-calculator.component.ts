import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SAPRMMService } from '../../services/sap-rmm.service';
import { BusinessLogic } from './sap-rmm-calculator.business';

@Component({
  selector: 'app-sap-rmm-calculator',
  templateUrl: './sap-rmm-calculator.component.html',
  styleUrls: ['./sap-rmm-calculator.component.css']
})
export class SapRmmCalculatorComponent {

  bl: BusinessLogic;

  constructor(
    dialog: MatDialog,
    service: SAPRMMService,
    router: Router,
  ) {
    this.bl = new BusinessLogic(dialog, service, router)
  }
}