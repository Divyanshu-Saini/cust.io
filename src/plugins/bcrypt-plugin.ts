import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import bcrypt from 'fastify-bcrypt';

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/beliven-it/fastify-bcrypt
 */
export default fp(async (fastify: FastifyInstance) => {
  fastify.register(bcrypt);
});
