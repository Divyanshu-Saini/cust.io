import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import jwt, { FastifyJWTOptions } from '@fastify/jwt';

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-jwt
 */
export default fp<FastifyJWTOptions>(async (fastify: FastifyInstance) => {
  const jwtOptions: FastifyJWTOptions = {
    secret: 'kiritothegreat',
    sign: {
      expiresIn: '1h',
    },
  };

  fastify.register(jwt, jwtOptions);
});
