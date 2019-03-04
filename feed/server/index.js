/* eslint-disable spaced-comment */
require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Feeds = require('../database/Collections/feed.js');
const Feed = require('../database/Models/FeedDB.js');

const app = express();

// app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

///////////////////////////
/* GET latest 10 records */
///////////////////////////

app.get('/espn/feeds', (req, res) => {
  Feeds.query((qb) => {
    qb.limit(10);
  })
    .orderBy('id', 'DESC')
    .fetchAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(err => console.log(err));
});

/////////////////////////////
/* GET single record by ID */
/////////////////////////////

app.get('/espn/feeds/:id', (req, res) => {
  const { id } = req.params;
  new Feed({id: id})
    .fetch()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(err => console.log('ERROR: ', err));
});

///////////////////////////
/* POST new record to db */
///////////////////////////

app.post('/espn/feeds', (req, res) => {

  /* body object is representative of request asset that would be received from client */

  let body = {
    id: 10000000,
    author: 'Dana Rempel',
    authorphoto: 'http://lorempixel.com/28/28',
    title: 'Baby Fresh Central',
    bigphoto: 'http://lorempixel.com/600/400',
    smallphoto: 'http://lorempixel.com/200/150',
    newsfeed: 'Suscipit sint dignissimos. Suscipit ut ipsum facere eligendi qui. Facere dolorum quae natus necessitatibus.',
    videoclip: 'https://www.youtube.com/embed/nKLkj0FzoEo',
    timestamp: '2019-02-05T16:47:23.692Z'
  };

  new Feed({id: body.id})
    .fetch()
    .then((exists) => {
      if (!exists) {
        Feed.forge(body)
          .save(null, {method: 'insert'})
          .then(() => console.log('Record saved'))
      } else {
        console.log('Record already exists');
      }
      res.status(201).send(body);
    })
    .catch(err => console.log('Error: ', err));
});

////////////////////////
/* PATCH record in db */
////////////////////////

app.patch('/espn/feeds', (req, res) => {

  /* In this route, the request body would be supplied with a record ID and the attribute to be changed */

  const id = 10000000;
  const author = 'bill dabler';

  Feed.forge({id: id})
    .save({author: author}, {patch: true})
    .then((altered) => res.status(204).send(altered));
});

/////////////////////////
/* DELETE record in db */
/////////////////////////

app.delete('/espn/feeds/:id', (req, res) => {
  const { id } = req.params;

  Feed.forge({id: id})
    .destroy()
    .then(record => res.status(204).send(record))
    .then(() => console.log('Record deleted'))
    .catch(err => console.log('Error deleting', err))
});

// Serve static assets if in production
// check to see if the node environment is in production

// if (process.env.NODE_ENV === 'production') {
//   // set static folder
//   // everyone is using create-react-app
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
