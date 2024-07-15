import { FastifyInstance } from 'fastify';
import { SchemeNav } from '../schemas';
import { IResult } from 'mssql';

export class MarketDataService {
  private fastify: FastifyInstance;

  constructor(fastify: FastifyInstance) {
    this.fastify = fastify;
  }

  async getSchemeNav(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<SchemeNav>> {
    try {
      console.log(timesStamp, pageNumber, limit);
      await this.fastify.mssql.pool.connect();
      const result: IResult<SchemeNav> = await this.fastify.mssql.pool.query(`EXEC dbo.API_GET_SchemeNav
              @NAV_DATE = '${timesStamp}', 
              @page_no = ${pageNumber},                
              @page_size = ${limit}
          `);
      return result;
    } catch (error) {
      this.fastify.log.error(error, 'getSchemeNav');
      throw error;
    }
  }
}
