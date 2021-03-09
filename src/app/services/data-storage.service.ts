import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SAPRMM } from '../sap-rmm/sap-rmm.model'
import { Observable, of } from 'rxjs'
import { environment } from '../../environments/environment'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
/**
 * Service responsible for storing/retrieving app data.
 */
export class DataStorageService {

  constructor(private client: HttpClient) {}

  storeSAPRMM(data: SAPRMM): Observable<Object> {
    return this.client.post(`${environment.url}/saprmm/create`, data)
  }

  retrieveSAPRMM(): Observable<SAPRMM[]> {
    return this.client.get(`${environment.url}/saprmm/findAll`).pipe(map( data => data as [SAPRMM]));
  }
}
