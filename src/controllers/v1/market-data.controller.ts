import { FastifyInstance, FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { MarketDataService } from '../../services';
import { IResult } from 'mssql';
import { SchemeNav, SchemeNavResponse } from '../../schemas';

export class MarketDataController {
  private marketDataService: MarketDataService;

  constructor(fastify: FastifyInstance) {
    this.marketDataService = new MarketDataService(fastify);
  }

  getSchemeNav = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const { timeStamp, pageNumber, limit } = request.query as { timeStamp: Date; pageNumber: number; limit: number };
    const data: IResult<SchemeNav> = await this.marketDataService.getSchemeNav(timeStamp, pageNumber, limit);

    const schemeNavResponse: SchemeNavResponse = {
      result: data.recordset,
      previous: data.recordsets[1][0].PREVIOUS_PAGE,
      current: data.recordsets[1][0].CURRENT_PAGE,
      next: {
        page: data.recordsets[1][0].NEXT_PAGE,
        limit: limit,
        link: `${request.protocol}:/${request.hostname}${request.routeOptions.url}?timeStamp=${timeStamp}&limit=${limit}&pageNumber=${data.recordsets[1][0].NEXT_PAGE}`,
      },
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
    marketDataController.getSchemeNav,
  );
};

export default MarketDataPlugin;
