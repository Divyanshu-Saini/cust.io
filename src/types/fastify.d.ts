import { FastifyInstance } from 'fastify';
import { MSSQLFastifyInterface } from 'fastify-mssql';
import { Server, Socket } from 'socket.io';
declare module 'fastify' {
  interface FastifyInstance {
    config: {
      PORT: string;
      MSSQL_SERVER: string;
      MSSQL_USER: string;
      MSSQL_PWD: string;
      MSSQL_PORT: string;
      MAX_POOL_SIZE: string;
      MIN_POOL_SIZE: string;
      DB_FUNDOO: string;
      DB_VF_CC: string;
      MONGO_USER: string;
      MONGO_PWD: string;
      MONGO_DB: string;
    };
    vfCc: MSSQLFastifyInterface;
    fundoo: MSSQLFastifyInterface;
    io: Server;
  }
}

declare module 'socket.io' {
  interface Socket {
    user?: VerifyPayloadType;
  }
}
