const schema = {
  type: 'object',
  required: ['MSSQL_SERVER', 'MSSQL_USER', 'MSSQL_PWD', 'MSSQL_DB', 'MSSQL_PORT'],
  properties: {
    PORT: {
      type: 'string',
    },
    MSSQL_SERVER: {
      type: 'string',
    },
    MSSQL_USER: {
      type: 'string',
    },
    MSSQL_PWD: {
      type: 'string',
    },
    MSSQL_DB: {
      type: 'string',
    },
    MSSQL_PORT: {
      type: 'string',
    },
  },
};

export default schema;
