import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SAPRMM } from '../sap-rmm/sap-rmm.model'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { v4 as uuidv4 } from 'uuid'
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
    return this.client.put(`${environment.firebaseURL}/${uuidv4()}.json`, data)
  }

  retrieveSAPRMM(): Observable<SAPRMM[]> {
    return this.client.get(`${environment.firebaseURL}.json`)
      .pipe(map(data => {
        const result: SAPRMM[] = []
        if(data) {
          for(const entry of Object.entries(data)) {
            result.push(entry[1])
          }
        }
        return result
      }))
  }
}
