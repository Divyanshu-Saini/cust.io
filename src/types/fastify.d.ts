import { FastifyInstance } from 'fastify';
import { Server, Socket } from 'socket.io';
declare module 'fastify' {
  interface FastifyInstance {
    config: {
      PORT: string;
      MONGO_USER: string;
      MONGO_PWD: string;
      MONGO_DB: string;
    };
    io: Server;
  }
}

declare module 'socket.io' {
  interface Socket {
    user?: VerifyPayloadType;
  }
}
