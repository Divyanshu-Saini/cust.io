import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import mongoose from 'mongoose';

export default fp(async (fastify: FastifyInstance) => {
  const dbUrl = `mongodb+srv://${fastify.config.MONGO_USER}:${fastify.config.MONGO_PWD}@custio.2i7amnv.mongodb.net/${fastify.config.MONGO_DB}?retryWrites=true&w=majority&appName=custio`;
  await mongoose.connect(dbUrl);
  fastify.decorate('mongoose', mongoose);
});
