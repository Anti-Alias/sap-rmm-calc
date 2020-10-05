import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SAPRMM } from '../sap-rmm/sap-rmm.model'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { v4 as uuidv4 } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private client: HttpClient) {}

  storeSAPRMM(data: SAPRMM): Observable<Object> {
    return this.client.put(`${environment.firebaseURL}/${uuidv4()}.json`, data)
  }
}
