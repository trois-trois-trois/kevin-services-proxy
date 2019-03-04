module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'espn',
      user: 'me',
      password: 'password',
    },
    seeds: {
      directory: './database/seedscripts',
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'espn',
      user: 'me',
      password: 'password',
    },
    seeds: {
      directory: './database/seedscripts/',
    },
  },

};
