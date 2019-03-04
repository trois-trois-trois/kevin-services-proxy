const db = require('../config.js');

const Stats = db.Model.extend({
    tableName: 'stats',
});

module.exports = Stats;