// module.exports = {
//   development: {
//     client: 'pg',
//     connection: {
//       host: '127.0.0.1',
//       user: 'fluffy',
//       password: 'troiscubed',
//       database: 'espndev',
//     },
//     seeds: {
//       directory: './database/seeds',
//     },
//   },
//   production: {
//     client: 'pg',
//     connection: {
//       host: '127.0.0.1',
//       user: 'fluffy',
//       password: 'troiscubed',
//       database: 'espn',
//     },
//     seeds: {
//       directory: './database/seeds',
//     },
//   },
// };

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'me',
      password: 'password',
      database: 'espn',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'me',
      password: 'password',
      database: 'espn',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};
