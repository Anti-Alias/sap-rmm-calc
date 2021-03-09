import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SAPRMMService } from '../services/sap-rmm.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private service: SAPRMMService, private router: Router) { }

  ngOnInit(): void {
  }

  createNewSAPRMM() {
    this.service.formState = null;
    this.service.editMode = false;
    this.router.navigateByUrl("/sap-rmm-calc");
  }
}
