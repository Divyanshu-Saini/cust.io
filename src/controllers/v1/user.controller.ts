import fastify, { FastifyPluginAsync, FastifyReply, FastifyRequest, FastifyInstance } from 'fastify';
import User, { IUser } from '../../schemas/user-schema';

export class UserOnboardingController {
  private fastify: FastifyInstance;
  constructor(fastify: FastifyInstance) {
    this.fastify = fastify;
  }

  register = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const { username, password, email, name, role } = request.body as IUser;
    try {
      const hashedPassword = await this.fastify.bcrypt.hash(password);
      const user = new User({ username, password: hashedPassword, email, name, role });
      await user.save();
      reply.send({ user });
    } catch (err) {
      reply.status(500).send(err);
    }
  };

  login = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const { username, password } = request.body as IUser;
    try {
      const user = await User.findOne({ username });
      if (!user || !(await this.fastify.bcrypt.compare(password, user.password))) {
        return reply.status(401).send({ message: 'Invalid username or password' });
      }
      const token = this.fastify.jwt.sign({ username });
      reply.send({ token });
    } catch (err) {
      reply.status(500).send(err);
    }
  };
}

const userOnboardingPlugin: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const userOnboardingController = new UserOnboardingController(fastify);
  fastify.post('/register', userOnboardingController.register);

  fastify.post('/login', userOnboardingController.login);
};

export default userOnboardingPlugin;
