const db = require('../config.js');
const Stat = require('../models/stats.js');

const Stats = new db.Collection();

Stats.model = Stat;

module.exports = Stats;