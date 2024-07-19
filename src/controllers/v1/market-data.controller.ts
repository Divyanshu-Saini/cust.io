import { FastifyInstance, FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { MarketDataService } from '../../services';
import { IResult } from 'mssql';
import {
  corporate_action_schema,
  CorporateAction,
  market_data_query_string,
  SchemaMaster,
  scheme_master_schema,
  scheme_rapm_schema,
  SchemeNav,
  MasterDataResponse,
  SchemeRapm,
  security_master_schema,
  security_prices_schema,
  SecurityMaster,
  SecurityPrices,
  page_details_schema,
} from '../../schemas';

export class MarketDataController {
  private marketDataService: MarketDataService;

  constructor(fastify: FastifyInstance) {
    this.marketDataService = new MarketDataService(fastify);
  }

  getSchemeNav = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const { timeStamp, pageNumber, limit } = request.query as { timeStamp: Date; pageNumber: number; limit: number };
    const data: IResult<SchemeNav> = await this.marketDataService.getSchemeNav(timeStamp, pageNumber, limit);
    const schemeNavResponse: MasterDataResponse = {
      result: data.recordset,
      previous: data.recordsets[1][0].PREVIOUS_PAGE,
      current: data.recordsets[1][0].CURRENT_PAGE,
      totalPages: data.recordsets[1][0].TOTAL_PAGES,
      next: {
        page: data.recordsets[1][0].NEXT_PAGE,
        limit: limit,
        link: data.recordsets[1][0].NEXT_PAGE
          ? `${request.protocol}:/${request.hostname}${request.routeOptions.url}?timeStamp=${timeStamp}&limit=${limit}&pageNumber=${data.recordsets[1][0].NEXT_PAGE}`
          : null,
      },
    };

    reply.status(200).send(schemeNavResponse);
  };

  getSchemeMaster = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const { timeStamp, pageNumber, limit } = request.query as { timeStamp: Date; pageNumber: number; limit: number };
    const data: IResult<SchemaMaster> = await this.marketDataService.getSchemeMaster(timeStamp, pageNumber, limit);

    const schemeNavResponse: MasterDataResponse = {
      result: data.recordset,
      // previous: data.recordsets[1][0].PREVIOUS_PAGE,
      // current: data.recordsets[1][0].CURRENT_PAGE,
      // next: {
      //   page: data.recordsets[1][0].NEXT_PAGE,
      //   limit: limit,
      //   link: `${request.protocol}:/${request.hostname}${request.routeOptions.url}?timeStamp=${timeStamp}&limit=${limit}&pageNumber=${data.recordsets[1][0].NEXT_PAGE}`,
      // },
    };

    reply.status(200).send(schemeNavResponse);
  };

  getSecurityPrices = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const { timeStamp, pageNumber, limit } = request.query as { timeStamp: Date; pageNumber: number; limit: number };
    const data: IResult<SecurityPrices> = await this.marketDataService.getSecurityPrices(timeStamp, pageNumber, limit);

    const schemeNavResponse: MasterDataResponse = {
      result: data.recordset,
      // previous: data.recordsets[1][0].PREVIOUS_PAGE,
      // current: data.recordsets[1][0].CURRENT_PAGE,
      // next: {
      //   page: data.recordsets[1][0].NEXT_PAGE,
      //   limit: limit,
      //   link: `${request.protocol}:/${request.hostname}${request.routeOptions.url}?timeStamp=${timeStamp}&limit=${limit}&pageNumber=${data.recordsets[1][0].NEXT_PAGE}`,
      // },
    };

    reply.status(200).send(schemeNavResponse);
  };

  getSecurityMaster = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const { timeStamp, pageNumber, limit } = request.query as { timeStamp: Date; pageNumber: number; limit: number };
    const data: IResult<SecurityMaster> = await this.marketDataService.getSecurityMaster(timeStamp, pageNumber, limit);

    const schemeNavResponse: MasterDataResponse = {
      result: data.recordset,
      // previous: data.recordsets[1][0].PREVIOUS_PAGE,
      // current: data.recordsets[1][0].CURRENT_PAGE,
      // next: {
      //   page: data.recordsets[1][0].NEXT_PAGE,
      //   limit: limit,
      //   link: `${request.protocol}:/${request.hostname}${request.routeOptions.url}?timeStamp=${timeStamp}&limit=${limit}&pageNumber=${data.recordsets[1][0].NEXT_PAGE}`,
      // },
    };

    reply.status(200).send(schemeNavResponse);
  };

  getSchemeRapm = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const { timeStamp, pageNumber, limit } = request.query as { timeStamp: Date; pageNumber: number; limit: number };
    const data: IResult<SchemeRapm> = await this.marketDataService.getSchemeRapm(timeStamp, pageNumber, limit);

    const schemeNavResponse: MasterDataResponse = {
      result: data.recordset,
      // previous: data.recordsets[1][0].PREVIOUS_PAGE,
      // current: data.recordsets[1][0].CURRENT_PAGE,
      // next: {
      //   page: data.recordsets[1][0].NEXT_PAGE,
      //   limit: limit,
      //   link: `${request.protocol}:/${request.hostname}${request.routeOptions.url}?timeStamp=${timeStamp}&limit=${limit}&pageNumber=${data.recordsets[1][0].NEXT_PAGE}`,
      // },
    };

    reply.status(200).send(schemeNavResponse);
  };

  getCorporateAction = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const { timeStamp, pageNumber, limit } = request.query as { timeStamp: Date; pageNumber: number; limit: number };
    const data: IResult<CorporateAction> = await this.marketDataService.getCorporateAction(
      timeStamp,
      pageNumber,
      limit,
    );

    const schemeNavResponse: MasterDataResponse = {
      result: data.recordset,
      // previous: data.recordsets[1][0].PREVIOUS_PAGE,
      // current: data.recordsets[1][0].CURRENT_PAGE,
      // next: {
      //   page: data.recordsets[1][0].NEXT_PAGE,
      //   limit: limit,
      //   link: `${request.protocol}:/${request.hostname}${request.routeOptions.url}?timeStamp=${timeStamp}&limit=${limit}&pageNumber=${data.recordsets[1][0].NEXT_PAGE}`,
      // },
    };

    reply.status(200).send(schemeNavResponse);
  };
}

const MarketDataPlugin: FastifyPluginAsync = async (fastify: FastifyInstance): Promise<void> => {
  const marketDataController = new MarketDataController(fastify);

  fastify.get(
    '/market-data/schemeNav',
    {
      schema: {
        description: 'This Endpoint is used to fetch the schemes nav details',
        tags: ['market-data'],
        summary: 'Fetch scheme nav',
        querystring: market_data_query_string,
        response: {
          200: {
            type: 'object',
            properties: {
              result: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    SCHEME_ID: { type: 'string' },
                    NAV_DATE: { type: 'string', format: 'date-time' },
                    NAV: { type: 'number' },
                    ADJUSTED_NAV: { type: 'number' },
                    NAV_RETURN: { type: 'number' },
                    MONTHLY_RETURN: { type: 'number', nullable: true },
                    FLAG: { type: 'string', nullable: true },
                    DIVIDEND: { type: 'string', nullable: true },
                    BONUS1: { type: 'string', nullable: true },
                    BONUS2: { type: 'string', nullable: true },
                    MODIFIED_DATE: { type: 'string', format: 'date-time' },
                  },
                },
              },
              ...page_details_schema,
            },
          },
        },
      },
    },
    marketDataController.getSchemeNav,
  );

  fastify.get(
    '/market-data/schemeMaster',
    {
      schema: {
        description: 'This Endpoint is used to fetch the schemes master details',
        tags: ['market-data'],
        summary: 'Fetch scheme master',
        querystring: market_data_query_string,
        response: {
          200: {
            type: 'object',
            properties: {
              result: scheme_master_schema,
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
    },
    marketDataController.getSchemeMaster,
  );

  fastify.get(
    '/market-data/securityPrice',
    {
      schema: {
        description: 'This Endpoint is used to fetch the security prices details',
        tags: ['market-data'],
        summary: 'Fetch security price',
        querystring: market_data_query_string,
        response: {
          200: {
            type: 'object',
            properties: {
              result: security_prices_schema,
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
    },
    marketDataController.getSecurityPrices,
  );

  fastify.get(
    '/market-data/securityMaster',
    {
      schema: {
        description: 'This Endpoint is used to fetch the security master details',
        tags: ['market-data'],
        summary: 'Fetch security master',
        querystring: market_data_query_string,
        response: {
          200: {
            type: 'object',
            properties: {
              result: security_master_schema,
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
    },
    marketDataController.getSecurityMaster,
  );

  fastify.get(
    '/market-data/schemeRapm',
    {
      schema: {
        description: 'This Endpoint is used to fetch the scheme rapm details',
        tags: ['market-data'],
        summary: 'Fetch security master',
        querystring: market_data_query_string,
        response: {
          200: {
            type: 'object',
            properties: {
              result: scheme_rapm_schema,
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
    },
    marketDataController.getSchemeRapm,
  );

  fastify.get(
    '/market-data/corporateAction',
    {
      schema: {
        description: 'This Endpoint is used to fetch the corporate action details',
        tags: ['market-data'],
        summary: 'Fetch corporate action',
        querystring: market_data_query_string,
        response: {
          200: {
            type: 'object',
            properties: {
              result: corporate_action_schema,
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
    },
    marketDataController.getCorporateAction,
  );
};

export default MarketDataPlugin;
