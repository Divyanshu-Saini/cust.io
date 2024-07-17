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

export type SchemeNavResponse = {
  result: SchemeNav[];
  previous: number | null;
  current: number;
  next: {
    page: number | null;
    limit: number;
    link: string | null;
  };
};

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
