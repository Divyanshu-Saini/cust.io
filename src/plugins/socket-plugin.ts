import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import fastifySocketIO from 'fastify-socket.io';
import { Socket } from 'socket.io';

export default fp(async (fastify: FastifyInstance) => {
  fastify.register(fastifySocketIO);

  fastify.ready().then(() => {
    fastify.io.use((socket, next) => {
      // Extract token from query parameters or headers
      const token = socket.handshake.query.token as string;

      if (token) {
        const decoded = fastify.jwt.verify(token);
        console.log(decoded);
        if (decoded) {
          socket.user = decoded;
          next();
        } else {
          next(new Error('Authentication error'));
        }
      } else {
        next(new Error('Authentication error'));
      }
    });

    fastify.io.on('connection', (socket: Socket) => {
      fastify.log.info('a user connected');

      socket.on('disconnect', () => {
        fastify.log.info('user disconnected');
      });

      socket.on('chat message', (msg) => {
        fastify.io.emit('chat message', msg);
      });

      socket.on('video signal', (stream) => {
        socket.broadcast.emit('video signal', stream);
      });

      socket.on('screen signal', (stream) => {
        socket.broadcast.emit('screen signal', stream);
      });
    });
  });
});
