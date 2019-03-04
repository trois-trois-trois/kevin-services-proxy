const db = require('../config.js');

const Feed = db.Model.extend({
  tableName: 'feeds',
});

module.exports = Feed;
