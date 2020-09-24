import { Component, OnInit } from '@angular/core';
import { SAPRMMService } from '../sap-rmm.service';

@Component({
  selector: 'app-sap-rmm-confirm',
  templateUrl: './sap-rmm-confirm.component.html',
  styleUrls: ['./sap-rmm-confirm.component.css']
})
export class SapRmmConfirmComponent implements OnInit {

  constructor(private service: SAPRMMService) { }

  ngOnInit(): void {
    console.log(this.service.formState)
  }

}
