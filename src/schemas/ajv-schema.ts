// {
//     schema: {
//       description: 'This Endpoint is used to fetch the security prices details',
//       tags: ['market-data'],
//       summary: 'Fetch Security Prices',
//       querystring: {
//         type: 'object',
//         properties: {
//           timeStamp: { type: 'string', format: 'date-time' },
//           limit: { type: 'number' },
//           pageNumber: { type: 'number' },
//         },
//         required: ['timeStamp', 'limit', 'pageNumber'],
//       },
//       response: {
//         200: {
//           type: 'object',
//           properties: {
//             result: {
//               type: 'array',
//               items: {
//                 type: 'object',
//                 properties: {
//                      PRICEDATE: { type: 'string', format: 'date-time' },
//                      SECURITYCODE: { type: 'string' },
//                      ISINCODE: { type: 'string' },
//                      NSECLOSEPRICE: { type: 'number' },
//                      BSECLOSEPRICE: { type: 'number' },
//                      Description: { type: 'string' },
//                  }
//               },
//             },
//             current: { type: 'number' },
//             previous: { type: 'number', nullable: true },
//             next: {
//               type: 'object',
//               properties: {
//                 page: { type: 'number' },
//                 limit: { type: 'number' },
//                 link: { type: 'string' },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
