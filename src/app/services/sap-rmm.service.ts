import { Injectable } from '@angular/core'
import { SAPRMM } from '../sap-rmm/sap-rmm.model'

@Injectable({
  providedIn: 'root'
})
export class SAPRMMService {

  /**
   * Current state of the form.
   */
  formState?: SAPRMM = null

  constructor() {
    console.log("created SAPRMMService")
  }
}
