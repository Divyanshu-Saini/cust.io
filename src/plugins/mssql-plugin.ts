import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import fastifyMssql, { MSSQLPluginOptions } from 'fastify-mssql';

/**
 * This plugins is used to work with mssql db
 *
 * @see https://github.com/nearform/fastify-mssql
 */
export default fp<MSSQLPluginOptions>(async (fastify: FastifyInstance) => {
  fastify.register(fastifyMssql, {
    server: String(fastify.config.MSSQL_SERVER),
    user: fastify.config.MSSQL_USER,
    password: fastify.config.MSSQL_PWD,
    database: fastify.config.MSSQL_DB,
    port: +(fastify.config.MSSQL_PORT || 1433),
    pool: {
      max: +fastify.config.MAX_POOL_SIZE,
      min: +fastify.config.MIN_POOL_SIZE,
    },
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  });
});
