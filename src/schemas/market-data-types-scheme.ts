export interface PageInfo {
  TOTAL_ROWS: number;
  CURRENT_PAGE_ROWS: number;
  START_PAGE_ROW: number;
  END_PAGE_ROW: number;
  TOTAL_PAGES: number;
  PREVIOUS_PAGE: number | null;
  CURRENT_PAGE: number;
  NEXT_PAGE: number;
}

export interface SchemeNav extends PageInfo {
  SCHEME_ID: string;
  NAV_DATE: string;
  NAV: number;
  ADJUSTED_NAV: number;
  NAV_RETURN: number;
  MONTHLY_RETURN: number | null;
  FLAG: string | null;
  DIVIDEND: string | null;
  BONUS1: string | null;
  BONUS2: string | null;
  MODIFIED_DATE: string;
}

export interface SchemaMaster extends PageInfo {
  Scheme_Id: number;
  Scheme_Name: string;
  FullName: string;
  AMFI_Name: string;
  AMFI_Code: number;
  AMC_Name: string;
  Initial_NAV: number;
  Inception_Date: string;
  Inception_NAV: number;
  Asset_Type: string;
  Type: string;
  Category: string;
  Sub_Category: null | string;
  Scheme_Plan: string;
  Scheme_Option: string;
  SCHEME_ISIN: string;
  Index_Id: null | string | number;
  Actual_Index_ID: null | string | number;
  Primary_Fund_Manager: string;
  Second_Fund_manager: null | string;
  Entry_Load: null | string | number;
  Exit_Load: number;
  Expense_Ratio: number;
  Active_Inactive_Flag: boolean;
  Active_Inactive_Status: null | string;
  Daily_Monthly_Flag: number;
  Min_Investment: number;
  Primary_FM_ID: null | number;
  Second_FM_ID: null | number;
  Display_AMC_Name: string;
  Display_Scheme_Name: string;
  Primary_Flag: string;
  RTA_CODE: string;
  Color_Code: string;
  LockIn_Period: number;
  Load_LockIn: string;
  Redemption_Days: number;
  Price_Earnings: null | number;
  Price_To_Book: null | number;
  SIP_Status: string;
  Div_Reinvest_Flag: number;
  AMC_ID: number;
  maturity_date: null | string;
  Updated_On: string;
  Scheme_OD_Name: string;
  Scheme_Tax_Type: string;
  CATEGORY_ID: number;
  Composite_Score: null | number;
  Index_Name: null | string;
  AMC_short_Name: string;
  Exit_Remarks: string;
  AUM: number;
}

export interface SecurityMaster extends PageInfo {
  CompanyCode: number;
  SecurityTypeCode: number;
  SecuritySubTypeCode: number;
  SerialNumber: number;
  SecurityCode: string;
  TickerName: string;
  IssuePrice: number;
  Description: string;
  DateOfIssue: string;
  DateOfExpiry: null | string;
  FaceValue: number;
  MarketLot: number;
  ISINCode: string;
  Remarks: string;
  CreatedOn: string;
  CreatedBy: string;
  LastModifiedOn: string;
  LastModifiedBy: string;
  ReasonForModification: string;
  DeleteFlag: boolean;
  Code: string;
  IsItActiveSecurity: boolean;
  BroadIndustryCode: number;
  BroadIndustryName: string;
  ShortCompanyName: string;
  nsecode: null | string;
}

export interface SchemeRapm extends PageInfo {
  RTA_CODE: string;
  Scheme_ID: number;
  From_Date: string;
  To_Date: string;
  Absolute_PO_Return: number;
  Absolute_BM_Return: number;
  Ann_PO_Return: number;
  Ann_BM_Return: number;
  Alpha: number;
  Portfolio_Volatility: number;
  Benchmark_Volatility: number;
  Beta: number;
  Jenson_Alpha: number;
  PO_Sortino_Ratio: number;
  BM_Sortino_Ratio: number;
  PO_Treynor_Ratio: number;
  BM_Treynor_Ratio: number;
  PO_Sharpe_Ratio: number;
  BM_Sharpe_Ratio: number;
  Active_Risk: number;
  Information_Ratio: number;
  P_RET_1M: number;
  BM_RET_1M: number;
  P_RET_3M: number;
  BM_RET_3M: number;
  P_RET_6M: number;
  BM_RET_6M: number;
  P_RET_1Y: number;
  BM_RET_1Y: number;
  P_RET_3Y: number;
  BM_RET_3Y: number;
  P_RET_5Y: number;
  BM_RET_5Y: number;
  P_RET_2Y: number;
  BM_RET_2Y: number;
  PO_Sharpe_Ratio_1Y: number;
  PO_Sharpe_Ratio_3Y: number;
  PO_Sharpe_Ratio_5Y: number;
  Portfolio_Volatility_1Y: number;
  Portfolio_Volatility_3Y: number;
  Portfolio_Volatility_5Y: number;
  P_Ret_1D: number;
  AUM: number | null;
  BM_Ret_1D: number;
  CAT_RET_1D: number;
}

// export type SchemeRmapResponse = {
//   result: SchemeRmap[];
//   previous: number | null;
//   current: number;
//   next: {
//     page: number | null;
//     limit: number;
//     link: string | null;
//   };
// };

export interface SecurityPrices extends PageInfo {
  PRICEDATE: string;
  SECURITYCODE: string;
  ISINCODE: string;
  NSECLOSEPRICE: number;
  BSECLOSEPRICE: number;
  Description: string;
}

// export type SecurityPricesResponse = {
//   result: SecurityPrices[];
//   previous: number | null;
//   current: number;
//   next: {
//     page: number | null;
//     limit: number;
//     link: string | null;
//   };
// };
export interface CorporateAction extends PageInfo {
  RowId: number;
  CAType: string;
  BCNumber: string;
  CompanyCode: number;
  SecurityCode: string;
  BSENSECode: string;
  ISINCode: string;
  BCFromDate: string;
  BCToDate: string;
  ExDate: string;
  Remarks: string;
  DividendRate: number;
  DividendPerShare: number;
  AddUpdFlag: string;
  NewRatio: number;
  OldRatio: number;
  IssuePrice: number;
  SubscriptionStartDate: number | null;
  SubscriptionEndDate: number | null;
  Notes: string;
  Exchange: string;
  EffectiveDate: string;
  OldISIN: string;
  OldName: string;
  PayDate: number | null;
  FaceValue: number;
  MarketLot: number;
  GROUP: string;
  SecurityType: string;
  SettlementMode: string;
  LastModified: string;
}

// export type CorporateActionResponse = {
//   result: CorporateAction[];
//   previous: number | null;
//   current: number;
//   next: {
//     page: number | null;
//     limit: number;
//     link: string | null;
//   };
// };

export type SchemeNavResponse = {
  result: SchemeNav[] | CorporateAction[] | SecurityPrices[] | SchemeRapm[] | SchemaMaster[] | SecurityMaster[];
  previous?: number | null;
  current?: number | null;
  totalPages?: number | null;
  next?: {
    page: number | null;
    limit: number | null;
    link: string | null;
  };
};
