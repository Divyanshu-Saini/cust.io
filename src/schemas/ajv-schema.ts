const security_prices_schema = {
  schema: {
    description: 'This Endpoint is used to fetch the corporate action details',
    tags: ['market-data'],
    summary: 'Fetch Corporate Action',
    querystring: {
      type: 'object',
      properties: {
        timeStamp: { type: 'string', format: 'date-time' },
        limit: { type: 'number' },
        pageNumber: { type: 'number' },
      },
      required: ['timeStamp', 'limit', 'pageNumber'],
    },
    response: {
      200: {
        type: 'object',
        properties: {
          result: {
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
          },
          current: { type: 'number' },
          previous: { type: 'number', nullable: true },
          next: {
            type: 'object',
            properties: {
              page: { type: 'number' },
              limit: { type: 'number' },
              link: { type: 'string' },
            },
          },
        },
      },
    },
  },
};

export default security_prices_schema;
