import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import mongoose from 'mongoose';

export default fp(async (fastify: FastifyInstance) => {
  const dbUrl = 'mongodb://localhost:27017/mydatabase';
  await mongoose.connect(dbUrl);
  fastify.decorate('mongoose', mongoose);
});
