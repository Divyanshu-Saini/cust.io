import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import swaggerUi, { FastifySwaggerUiOptions } from '@fastify/swagger-ui';

/**
 * This plugins provide UI to server API documentations.
 *
 * @see https://github.com/fastify/fastify-swagger-ui
 */
export default fp<FastifySwaggerUiOptions>(async (fastify: FastifyInstance) => {
  const swaggerUiOptions: FastifySwaggerUiOptions = {
    routePrefix: '/documentation',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    staticCSP: true,
  };

  fastify.register(swaggerUi, swaggerUiOptions);
});
