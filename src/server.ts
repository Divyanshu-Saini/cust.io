import Fastify, { FastifyInstance, FastifyListenOptions } from 'fastify';
import app from './app';

const fastify: FastifyInstance = Fastify({
  logger: {
    level: 'debug',
  },
});

const start = async () => {
  try {
    await fastify.register(app);
    const port = +(process.env.PORT || 3000); // Use environment variable or default to 3000
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
