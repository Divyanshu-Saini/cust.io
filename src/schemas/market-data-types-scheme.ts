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

// export interface SchemeRapm extends PageInfo {
// RTA_CODE: string;
// Scheme_ID: number;
// From_Date: string;
// To_Date: string;
// Absolute_PO_Return: number;
// Absolute_BM_Return: number;
// Ann_PO_Return: number;
// Ann_BM_Return: number;
// Alpha: number;
// Portfolio_Volatility: number;
// Benchmark_Volatility: number;
// Beta: number;
// Jenson_Alpha: number;
// PO_Sortino_Ratio: number;
// BM_Sortino_Ratio: number;
// PO_Treynor_Ratio: number;
// BM_Treynor_Ratio: number;
// PO_Sharpe_Ratio: number;
// BM_Sharpe_Ratio: number;
// Active_Risk: number;
// Information_Ratio: number;
// P_RET_1M: number;
// BM_RET_1M: number;
// P_RET_3M: number;
// BM_RET_3M: number;
// P_RET_6M: number;
// BM_RET_6M: number;
// P_RET_1Y: number;
// BM_RET_1Y: number;
// P_RET_3Y: number;
// BM_RET_3Y: number;
// P_RET_5Y: number;
// BM_RET_5Y: number;
// P_RET_2Y: number;
// BM_RET_2Y: number;
// PO_Sharpe_Ratio_1Y: number;
// PO_Sharpe_Ratio_3Y: number;
// PO_Sharpe_Ratio_5Y: number;
// Portfolio_Volatility_1Y: number;
// Portfolio_Volatility_3Y: number;
// Portfolio_Volatility_5Y: number;
// P_Ret_1D: number;
// AUM: number | null;
// BM_Ret_1D: number;
// CAT_RET_1D: number;
// }

// export interface PageInfo {
//   TOTAL_ROWS: number;
//   CURRENT_PAGE_ROWS: number;
//   START_PAGE_ROW: number;
//   END_PAGE_ROW: number;
//   TOTAL_PAGES: number;
//   PREVIOUS_PAGE: number | null;
//   CURRENT_PAGE: number;
//   NEXT_PAGE: number;
// }

// export type SchemeRapmResponse = {
//   result: SchemeRapm[];
//   previous: number | null;
//   current: number;
//   next: {
//     page: number | null;
//     limit: number;
//     link: string | null;
//   };
// };
