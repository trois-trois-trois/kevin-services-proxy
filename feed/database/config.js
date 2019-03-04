const config = require('../knexfile.js');
const env = 'development';
const knex = require('knex')(config[env]);

const db = require('bookshelf')(knex);

db.knex.schema.hasTable('feeds').then((exists) => {
  if (!exists) {
    return db.knex.schema.createTable('feeds', (t) => {
      t.increments('id').primary();
      t.text('author');
      t.text('authorphoto');
      t.text('title');
      t.text('bigphoto');
      t.text('smallphoto');
      t.text('newsfeed');
      t.text('videoclip');
      t.timestamp('timestamp').defaultTo(knex.fn.now());
    })
      .then(t => console.log('Created Table:', t))
      .catch(err => console.log('Error creating Table', err));
  }
});

module.exports = db;
