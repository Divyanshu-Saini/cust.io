export const scheme_rmap_schema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      RTA_CODE: { type: 'string' },
      Scheme_ID: { type: 'number' },
      From_Date: { type: 'string', format: 'date-time' },
      To_Date: { type: 'string', format: 'date-time' },
      Absolute_PO_Return: { type: 'number' },
      Absolute_BM_Return: { type: 'number' },
      Ann_PO_Return: { type: 'number' },
      Ann_BM_Return: { type: 'number' },
      Alpha: { type: 'number' },
      Portfolio_Volatility: { type: 'number' },
      Benchmark_Volatility: { type: 'number' },
      Beta: { type: 'number' },
      Jenson_Alpha: { type: 'number' },
      PO_Sortino_Ratio: { type: 'number' },
      BM_Sortino_Ratio: { type: 'number' },
      PO_Treynor_Ratio: { type: 'number' },
      BM_Treynor_Ratio: { type: 'number' },
      PO_Sharpe_Ratio: { type: 'number' },
      BM_Sharpe_Ratio: { type: 'number' },
      Active_Risk: { type: 'number' },
      Information_Ratio: { type: 'number' },
      P_RET_1M: { type: 'number' },
      BM_RET_1M: { type: 'number' },
      P_RET_3M: { type: 'number' },
      BM_RET_3M: { type: 'number' },
      P_RET_6M: { type: 'number' },
      BM_RET_6M: { type: 'number' },
      P_RET_1Y: { type: 'number' },
      BM_RET_1Y: { type: 'number' },
      BM_RET_3Y: { type: 'number' },
      P_RET_3Y: { type: 'number' },
      P_RET_5Y: { type: 'number' },
      BM_RET_5Y: { type: 'number' },
      P_RET_2Y: { type: 'number' },
      BM_RET_2Y: { type: 'number' },
      PO_Sharpe_Ratio_1Y: { type: 'number' },
      PO_Sharpe_Ratio_3Y: { type: 'number' },
      PO_Sharpe_Ratio_5Y: { type: 'number' },
      Portfolio_Volatility_1Y: { type: 'number' },
      Portfolio_Volatility_3Y: { type: 'number' },
      Portfolio_Volatility_5Y: { type: 'number' },
      P_Ret_1D: { type: 'number' },
      AUM: { type: 'number', nullable: 'true' },
      BM_Ret_1D: { type: 'number' },
      CAT_RET_1D: { type: 'number' },
    },
  },
};

export const security_prices_schema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      PRICEDATE: { type: 'string', format: 'date-time' },
      SECURITYCODE: { type: 'string' },
      ISINCODE: { type: 'string' },
      NSECLOSEPRICE: { type: 'number' },
      BSECLOSEPRICE: { type: 'number' },
      Description: { type: 'string' },
    },
  },
};

export const corporate_action_schema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      RowId: { type: 'number' },
      CAType: { type: 'string' },
      BCNumber: { type: 'string' },
      CompanyCode: { type: 'number' },
      SecurityCode: { type: 'string' },
      BSENSECode: { type: 'string' },
      ISINCode: { type: 'string' },
      BCFromDate: { type: 'string', format: 'date-time' },
      BCToDate: { type: 'string', format: 'date-time' },
      ExDate: { type: 'string', format: 'date-time' },
      Remarks: { type: 'string' },
      DividendRate: { type: 'number' },
      DividendPerShare: { type: 'number' },
      AddUpdFlag: { type: 'string' },
      NewRatio: { type: 'number' },
      OldRatio: { type: 'number' },
      IssuePrice: { type: 'number' },
      SubscriptionStartDate: { type: 'number', nullable: 'true' },
      SubscriptionEndDate: { type: 'number', nullable: 'true' },
      Notes: { type: 'string' },
      Exchange: { type: 'string' },
      EffectiveDate: { type: 'string', format: 'date-time' },
      OldISIN: { type: 'string' },
      OldName: { type: 'string' },
      PayDate: { type: 'number', nullable: 'true' },
      FaceValue: { type: 'number' },
      MarketLot: { type: 'number' },
      GROUP: { type: 'string' },
      SecurityType: { type: 'string' },
      SettlementMode: { type: 'string' },
      LastModified: { type: 'string', format: 'date-time' },
    },
  },
};
