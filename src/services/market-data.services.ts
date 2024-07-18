import { FastifyInstance } from 'fastify';
import { CorporateAction, SchemaMaster, SchemeNav, SchemeRapm, SecurityMaster, SecurityPrices } from '../schemas';
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

  async getSchemeMaster(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<SchemaMaster>> {
    try {
      console.log(timesStamp, pageNumber, limit);
      await this.fastify.mssql.pool.connect();
      const result: IResult<SchemaMaster> = await this.fastify.mssql.pool.query(`EXEC dbo.API_GET_Scheme_Master
              @Modified_Date = '${timesStamp}'--, 
              -- @page_no = ${pageNumber},                
              -- @page_size = ${limit}
          `);
      return result;
    } catch (error) {
      this.fastify.log.error(error, 'getSchemeNav');
      throw error;
    }
  }

  async getSecurityPrices(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<SecurityPrices>> {
    try {
      console.log(timesStamp, pageNumber, limit);
      await this.fastify.mssql.pool.connect();
      const result: IResult<SecurityPrices> = await this.fastify.mssql.pool.query(`EXEC dbo.API_GET_SecurityPrice
              @Modified_Date = '${timesStamp}' --, 
              -- @page_no = ${pageNumber},                
              -- @page_size = ${limit}
          `);
      return result;
    } catch (error) {
      this.fastify.log.error(error, 'getSchemeNav');
      throw error;
    }
  }

  async getSecurityMaster(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<SecurityMaster>> {
    try {
      console.log(timesStamp, pageNumber, limit);
      await this.fastify.mssql.pool.connect();
      const result: IResult<SecurityMaster> = await this.fastify.mssql.pool.query(`EXEC dbo.API_GET_SecurityMaster
              @Modified_Date = '${timesStamp}' --, 
              -- @page_no = ${pageNumber},                
              -- @page_size = ${limit}
          `);
      return result;
    } catch (error) {
      this.fastify.log.error(error, 'getSchemeNav');
      throw error;
    }
  }

  async getSchemeRapm(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<SchemeRapm>> {
    try {
      console.log(timesStamp, pageNumber, limit);
      await this.fastify.mssql.pool.connect();
      const result: IResult<SchemeRapm> = await this.fastify.mssql.pool.query(`EXEC dbo.API_GET_Scheme_RAPM
              @Modified_Date = '${timesStamp}' --, 
             -- @page_no = ${pageNumber},                
             -- @page_size = ${limit}
          `);
      return result;
    } catch (error) {
      this.fastify.log.error(error, 'getSchemeNav');
      throw error;
    }
  }

  async getCorporateAction(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<CorporateAction>> {
    try {
      console.log(timesStamp, pageNumber, limit);
      await this.fastify.mssql.pool.connect();
      const result: IResult<CorporateAction> = await this.fastify.mssql.pool.query(`EXEC dbo.API_GET_CorporateActions
              @Modified_Date = '${timesStamp}' --, 
              -- @page_no = ${pageNumber},                
              -- @page_size = ${limit}
          `);
      return result;
    } catch (error) {
      this.fastify.log.error(error, 'getSchemeNav');
      throw error;
    }
  }
}
