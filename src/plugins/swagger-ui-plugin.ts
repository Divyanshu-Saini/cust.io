import fp from 'fastify-plugin';
import swaggerUi, { FastifySwaggerUiOptions } from '@fastify/swagger-ui';

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-swagger-ui
 */
export default fp<FastifySwaggerUiOptions>(async (fastify) => {
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
