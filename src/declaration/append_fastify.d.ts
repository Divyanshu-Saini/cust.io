import { FastifyInstance } from 'fastify';
declare module 'fastify' {
  interface FastifyInstance {
    config: {
      PORT: string;
      MSSQL_SERVER: string;
      MSSQL_USER: string;
      MSSQL_PWD: string;
      MSSQL_DB: string;
      MSSQL_PORT: string;
    };
  }
}
