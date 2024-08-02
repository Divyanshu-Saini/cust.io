import Fastify, { FastifyInstance, FastifyListenOptions } from 'fastify';
import fastifyEnv, { FastifyEnvOptions } from '@fastify/env';
import fastifyCors from '@fastify/cors';
import app from './app';
import schema from './schemas/env-schemas';

const fastify: FastifyInstance = Fastify({
  logger: {
    level: 'info',
  },
});

const envOptions: FastifyEnvOptions = {
  confKey: 'config',
  schema,
  dotenv: true,
  data: process.env,
};

const start = async () => {
  try {
    await fastify.register(fastifyEnv, envOptions);
    await fastify.register(fastifyCors, {
      origin: '*', // Allow all origins (not recommended for production)
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    });
    await fastify.register(app);
    const port = +(fastify.config.PORT || 3000);
    const address = 'localhost';
    const fastifylistenOpt: FastifyListenOptions = {
      port: port,
      host: address,
    };
    await fastify.listen(fastifylistenOpt);
    console.log(`Server listening at http://${address}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
