import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';

const ping: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get(
    '/ping',
    {
      schema: {
        description: 'Ping route',
        tags: ['ping'],
        summary: 'Ping route',
        response: {
          200: {
            description: 'Successful response',
            type: 'object',
            properties: {
              timestamp: { type: 'string', format: 'date-time' },
              hostname: { type: 'string' },
              userip: { type: 'string' },
              message: { type: 'string' },
            },
          },
        },
      },
    },
    async function (request: FastifyRequest, reply: FastifyReply) {
      console.log('Ping Request', request.hostname);
      console.log('Opts ', opts);
      await fastify.mssql.pool.connect();
      const res = await fastify.mssql.pool.query('select COUNT(*) as rec from dbo.INSTRUMENTS');
      console.log('res : ', JSON.stringify(res));
      reply.status(200).send({
        timestamp: new Date().toUTCString(),
        hostname: request.hostname,
        userip: request.ip,
        message: 'hey there!',
        res: res.recordset,
      });
    },
  );
};

export default ping;
