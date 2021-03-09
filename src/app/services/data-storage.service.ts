import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SAPRMM, SAPRMMSubData } from '../sap-rmm/sap-rmm.model'
import { Observable, of } from 'rxjs'
import { environment } from '../../environments/environment'
import { map } from 'rxjs/operators'
import { unwrapResolvedMetadata } from '@angular/compiler'

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

  retrieveSAPRMM(id: number): Observable<SAPRMM> {
    return this.client.get(`${environment.url}/saprmm/read/${id}`).pipe(map( data => this.toSAPRMM(data)));
  }

  retrieveAllSAPRMM(): Observable<SAPRMM[]> {
    return this.client.get(`${environment.url}/saprmm/findAll`)
      .pipe(map( data => data as [any]))
      .pipe(map(data => data.map(entry => this.toSAPRMM(entry))));
  }

  updateSAPRMM(id: number, data: SAPRMMSubData): Observable<Object> {
    return this.client.patch(`${environment.url}/saprmm/update/${id}`, data)
  }

  deleteSAPRMM(id: number): Observable<Object> {
    return this.client.delete(`${environment.url}/saprmm/delete/${id}`);
  }

  private toSAPRMM(unparsed: any): SAPRMM {
    return {
      id: unparsed.id,
      poolPercent: unparsed.poolPercent,
      fmParticipationPercent: unparsed.fmParticipationPercent,
      upbInvestorPriorAmount: unparsed.upbInvestorPriorAmount,
      mortgageUpbPriorAmount: unparsed.mortgageUpbPriorAmount,
      upbCurrentAmount: unparsed.upbCurrentAmount,
      piPaymentAmount: unparsed.piPaymentAmount,
      noteRate: unparsed.noteRate,
      poolTerm: unparsed.poolTerm,
      productCode: unparsed.productCode,
      maturityDate: new Date(unparsed.maturityDate),
      noteMaturityDate: new Date(unparsed.noteMaturityDate),
      principalAmortizationCode: unparsed.principalAmortizationCode,
      ddlpi: new Date(unparsed.ddlpi),
      activeInactiveEditCode: unparsed.activeInactiveEditCode,
      upbAdjustmentAmountCurrent: unparsed.upbAdjustmentAmountCurrent,
      loanStatus: unparsed.loanStatus
    }
  }
}
