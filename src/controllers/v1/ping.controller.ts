import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import User, { IUser } from '../../schemas/user-schema';

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
      reply.status(200).send({
        timestamp: new Date().toUTCString(),
        hostname: request.hostname,
        userip: request.ip,
        message: 'hey there!',
      });
    },
  );

  // Routes
  fastify.post('/register', async (request, reply) => {
    const { username, password } = request.body as IUser;
    try {
      const hashedPassword = await fastify.bcrypt.hash(password, 10);
      const user = new User({ username, password: hashedPassword });
      await user.save();
      reply.send({ user });
    } catch (err) {
      reply.status(500).send(err);
    }
  });

  fastify.post('/login', async (request, reply) => {
    const { username, password } = request.body as IUser;
    try {
      const user = await User.findOne({ username });
      if (!user || !(await fastify.bcrypt.compare(password, user.password))) {
        return reply.status(401).send({ message: 'Invalid username or password' });
      }
      const token = fastify.jwt.sign({ username });
      reply.send({ token });
    } catch (err) {
      reply.status(500).send(err);
    }
  });
};

export default ping;
