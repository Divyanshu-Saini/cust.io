import { FastifyInstance } from 'fastify';
import { MSSQLFastifyInterface } from 'fastify-mssql';
declare module 'fastify' {
  interface FastifyInstance {
    config: {
      PORT: string;
      MSSQL_SERVER: string;
      MSSQL_USER: string;
      MSSQL_PWD: string;
      MSSQL_PORT: string;
      MAX_POOL_SIZE: string;
      MIN_POOL_SIZE: string;
      DB_FUNDOO: string;
      DB_VF_CC: string;
    };
    vfCc: MSSQLFastifyInterface;
    fundoo: MSSQLFastifyInterface;
  }
}
