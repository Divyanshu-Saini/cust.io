import { FastifyInstance } from 'fastify';
import {
  CorporateAction,
  SchemaMaster,
  SchemeNav,
  SchemeRapm,
  SecurityMaster,
  SecurityPrices,
  HoldingsWF,
} from '../schemas';
import { IResult } from 'mssql';
// import { MSSQLFastifyInterface } from 'fastify-mssql';

export class MarketDataService {
  private fastify: FastifyInstance;

  constructor(fastify: FastifyInstance) {
    this.fastify = fastify;
  }

  async getSchemeNav(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<SchemeNav>> {
    try {
      console.log(timesStamp, pageNumber, limit);
      await this.fastify.fundoo.pool.connect();
      const result: IResult<SchemeNav> = await this.fastify.fundoo.pool.query(`EXEC dbo.API_GET_SchemeNav
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
      await this.fastify.fundoo.pool.connect();
      const result: IResult<SchemaMaster> = await this.fastify.fundoo.pool.query(`EXEC dbo.API_GET_Scheme_Master
              @Modified_Date = '${timesStamp}'--, 
              -- @page_no = ${pageNumber},                
              -- @page_size = ${limit}
          `);
      return result;
    } catch (error) {
      this.fastify.log.error(error, 'getSchemeMaster');
      throw error;
    }
  }

  async getSecurityPrices(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<SecurityPrices>> {
    try {
      console.log(timesStamp, pageNumber, limit);
      await this.fastify.vfCc.pool.connect();
      const result: IResult<SecurityPrices> = await this.fastify.vfCc.pool.query(`EXEC dbo.API_GET_SecurityPrice
              @Modified_Date = '${timesStamp}' --, 
              -- @page_no = ${pageNumber},                
              -- @page_size = ${limit}
          `);
      return result;
    } catch (error) {
      this.fastify.log.error(error, 'getSecurityPrices');
      throw error;
    }
  }

  async getSecurityMaster(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<SecurityMaster>> {
    try {
      console.log(timesStamp, pageNumber, limit);
      await this.fastify.vfCc.pool.connect();
      const result: IResult<SecurityMaster> = await this.fastify.vfCc.pool.query(`EXEC dbo.API_GET_SecurityMaster
              @Modified_Date = '${timesStamp}' --, 
              -- @page_no = ${pageNumber},                
              -- @page_size = ${limit}
          `);
      return result;
    } catch (error) {
      this.fastify.log.error(error, 'getSecurityMaster');
      throw error;
    }
  }

  async getSchemeRapm(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<SchemeRapm>> {
    try {
      console.log(timesStamp, pageNumber, limit);
      await this.fastify.fundoo.pool.connect();
      const result: IResult<SchemeRapm> = await this.fastify.fundoo.pool.query(`EXEC dbo.API_GET_Scheme_RAPM
              @Modified_Date = '${timesStamp}' --, 
             -- @page_no = ${pageNumber},                
             -- @page_size = ${limit}
          `);
      return result;
    } catch (error) {
      this.fastify.log.error(error, 'getSchemeRapm');
      throw error;
    }
  }

  async getCorporateAction(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<CorporateAction>> {
    try {
      console.log(timesStamp, pageNumber, limit);
      await this.fastify.vfCc.pool.connect();
      const result: IResult<CorporateAction> = await this.fastify.vfCc.pool.query(`EXEC dbo.API_GET_CorporateActions
              @Modified_Date = '${timesStamp}' --, 
              -- @page_no = ${pageNumber},                
              -- @page_size = ${limit}
          `);
      console.log('res-- ', result);
      return result;
    } catch (error) {
      this.fastify.log.error(error, 'getCorporateAction');
      throw error;
    }
  }

  async getHoldingsWF(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<SchemeNav>> {
    try {
      console.log(timesStamp, pageNumber, limit);
      await this.fastify.fundoo.pool.connect();
      const result: IResult<HoldingsWF> = await this.fastify.fundoo.pool.query(`EXEC dbo.API_GET_Holdings_WF
              @NAV_DATE = '${timesStamp}', 
              @page_no = ${pageNumber},                
              @page_size = ${limit}
          `);
      return result;
    } catch (error) {
      this.fastify.log.error(error, 'getHoldingsWF');
      throw error;
    }
  }
}
