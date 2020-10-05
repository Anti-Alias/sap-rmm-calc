/**
 * Raw SAPRMM input data.
 */
export class SAPRMM {
    
    constructor(
        public poolPercent: number,
        public fmParticipationPercent: number,
        public upbInvestorPriorAmount: number,
        public mortgageUpbPriorAmount: number,
        public upbCurrentAmount: number,
        public piPaymentAmount: number,
        public noteRate: number,
        public poolTerm: number,
        public productCode: string,
        public maturityDate: Date,
        public noteMaturityDate: Date,
        public principalAmortizationCode: string,
        public ddlpi: string,
        public activeInactiveEditCode: string,
        public upbAdjustmentAmountCurrent: number,
        public loanStatus: string
    ) {}

    static toSubData(data: SAPRMM): SAPRMMSubData {
        return {
            saprmmid: "STUB",
            upb: data.upbAdjustmentAmountCurrent,
            rmm: "STUB",
            loanStatus: data.loanStatus,
            upbCurrentAmount: data.upbCurrentAmount,
            maturityDate: data.maturityDate,
            poolTerm: data.poolTerm
        }
    }
}

/**
 * A subset of the SAPRMM model data that is to be displayed on the screen.
 */
export interface SAPRMMSubData {
    saprmmid: string;
    upb: number;
    rmm: string;
    loanStatus: string,
    upbCurrentAmount: number,
    maturityDate: Date,
    poolTerm: number
}