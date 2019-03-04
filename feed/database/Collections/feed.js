const db = require('../config.js');
const Feeds = require('../Models/FeedDB.js');

const Feed = new db.Collection();

Feeds.model = Feed;

module.exports = Feeds;
