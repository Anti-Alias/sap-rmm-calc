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
}