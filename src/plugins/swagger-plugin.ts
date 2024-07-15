import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import swagger, { SwaggerOptions } from '@fastify/swagger';

/**
 * This plugins generate OpenApi spec
 *
 * @see https://github.com/fastify/fastify-swagger
 */
export default fp<SwaggerOptions>(async (fastify: FastifyInstance) => {
  const swaggerOptions: SwaggerOptions = {
    openapi: {
      openapi: '3.0.0',
      info: {
        title: 'New Age Fundoo APIs',
        description: 'Testing the New Age Fundoo APIs',
        version: '0.0.1',
      },
      servers: [
        {
          url: `http://localhost:${process.env.PORT || 3000}`,
          description: 'Development server for new age fundoo',
        },
      ],
      tags: [
        { name: 'ping', description: 'Server health check' },
        { name: 'market-data', description: 'Market data endpoint' },
      ],
      components: {
        securitySchemes: {
          apiKey: {
            type: 'apiKey',
            name: 'apiKey',
            in: 'header',
          },
        },
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
    },
  };

  fastify.register(swagger, swaggerOptions);
});
