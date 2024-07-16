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

///////////////////////////////////////

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

export type CorporateActionResponse = {
  result: CorporateAction[];
  previous: number | null;
  current: number;
  next: {
    page: number | null;
    limit: number;
    link: string | null;
  };
};
