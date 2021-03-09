import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { SAPRMM, SAPRMMSubData } from '../sap-rmm/sap-rmm.model';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource: SAPRMMSubData[] = []
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.dataStorageService.retrieveAllSAPRMM().subscribe(data =>
      this.dataSource = data.map (elem => SAPRMM.toSubData(elem))
    )
  }

}
