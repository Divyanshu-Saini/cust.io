export const scheme_master_schema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      Scheme_Id: { type: 'number' },
      Scheme_Name: { type: 'string' },
      FullName: { type: 'string' },
      AMFI_Name: { type: 'string' },
      AMFI_Code: { type: 'number' },
      AMC_Name: { type: 'string' },
      Initial_NAV: { type: 'number' },
      Inception_Date: { type: 'string', format: 'date-time' },
      Inception_NAV: { type: 'number' },
      Asset_Type: { type: 'string' },
      Type: { type: 'string' },
      Category: { type: 'string' },
      Sub_Category: { type: ['null', 'string'] },
      Scheme_Plan: { type: 'string' },
      Scheme_Option: { type: 'string' },
      SCHEME_ISIN: { type: 'string' },
      Index_Id: { type: ['null', 'string', 'number'] },
      Actual_Index_ID: { type: ['null', 'string', 'number'] },
      Primary_Fund_Manager: { type: 'string' },
      Second_Fund_manager: { type: ['null', 'string'] },
      Entry_Load: { type: ['null', 'string', 'number'] },
      Exit_Load: { type: 'number' },
      Expense_Ratio: { type: 'number' },
      Active_Inactive_Flag: { type: 'boolean' },
      Active_Inactive_Status: { type: ['null', 'string'] },
      Daily_Monthly_Flag: { type: 'number' },
      Min_Investment: { type: 'number' },
      Primary_FM_ID: { type: ['null', 'number'] },
      Second_FM_ID: { type: ['null', 'number'] },
      Display_AMC_Name: { type: 'string' },
      Display_Scheme_Name: { type: 'string' },
      Primary_Flag: { type: 'string' },
      RTA_CODE: { type: 'string' },
      Color_Code: { type: 'string' },
      LockIn_Period: { type: 'number' },
      Load_LockIn: { type: 'string' },
      Redemption_Days: { type: 'number' },
      Price_Earnings: { type: ['null', 'number'] },
      Price_To_Book: { type: ['null', 'number'] },
      SIP_Status: { type: 'string' },
      Div_Reinvest_Flag: { type: 'number' },
      AMC_ID: { type: 'number' },
      maturity_date: { type: ['null', 'string'], format: 'date-time' },
      Updated_On: { type: 'string', format: 'date-time' },
      Scheme_OD_Name: { type: 'string' },
      Scheme_Tax_Type: { type: 'string' },
      CATEGORY_ID: { type: 'number' },
      Composite_Score: { type: ['null', 'number'] },
      Index_Name: { type: ['null', 'string'] },
      AMC_short_Name: { type: 'string' },
      Exit_Remarks: { type: 'string' },
      AUM: { type: 'number' },
    },
  },
};

export const security_master_schema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      CompanyCode: { type: 'number' },
      SecurityTypeCode: { type: 'number' },
      SecuritySubTypeCode: { type: 'number' },
      SerialNumber: { type: 'number' },
      SecurityCode: { type: 'string' },
      TickerName: { type: 'string' },
      IssuePrice: { type: 'number' },
      Description: { type: 'string' },
      DateOfIssue: { type: 'string', format: 'date-time' },
      DateOfExpiry: { type: ['null', 'string'] },
      FaceValue: { type: 'number' },
      MarketLot: { type: 'number' },
      ISINCode: { type: 'string' },
      Remarks: { type: 'string' },
      CreatedOn: { type: 'string' },
      CreatedBy: { type: 'string' },
      LastModifiedOn: { type: 'string' },
      LastModifiedBy: { type: 'string' },
      ReasonForModification: { type: 'string' },
      DeleteFlag: { type: 'boolean' },
      Code: { type: 'string' },
      IsItActiveSecurity: { type: 'boolean' },
      BroadIndustryCode: { type: 'number' },
      BroadIndustryName: { type: 'string' },
      ShortCompanyName: { type: 'string' },
      nsecode: { type: ['null', 'string'] },
    },
  },
};
