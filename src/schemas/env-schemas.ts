const schema = {
  type: 'object',
  required: ['MSSQL_SERVER', 'MSSQL_USER', 'MSSQL_PWD', 'MSSQL_DB', 'MSSQL_PORT', 'MAX_POOL_SIZE', 'MIN_POOL_SIZE'],
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
    MAX_POOL_SIZE: {
      type: 'string',
    },
    MIN_POOL_SIZE: {
      type: 'string',
    },
  },
};

export default schema;
