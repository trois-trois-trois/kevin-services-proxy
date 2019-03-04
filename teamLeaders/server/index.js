require('newrelic')
const express = require('express');
const fetch = require("node-fetch");
const cors = require('cors');
const db = require('../database/config');
const Stats = require('../database/collections/stats.js');
const Stat = require('../database/models/stats');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/../client/dist`));



app.post('/stats', (req, res) => {
  //CREATE
  const { id, position, player, image, passing, rushing, receiving, touchdowns, tackles, sacks, interceptions, fumblesForced, fieldGoal, extraPoint } = req.body 
  let body = {
    id: 12,
    position: 'Offense',
    player: 'Randy Thomas',
    image: 'http://lorempixel.com/200/200',
    passing: '80',
    rushing: '60',
    receiving: '40',
    touchdowns: '3',
    tackles: '5',
    sacks: '0',
    interceptions: '0',
    fumblesForced: '0',
    fieldGoal: '0',
    extraPoint: '2',
  };

  db.knex('stats').insert(body)
  .then(() => res.status(200).send('Data successfully saved to DB'))
});

app.get('/stats', (req, res) => {
  //READ
  Stats.reset()
    .orderBy('id', 'DESC')
    .query((qb) => {
      qb.limit(20);
    })
    .fetch()
    .then((data) => {
      res.status(200).send(data.models);
    });
});

app.put('/stats', (req, res) => {
  //UPDATE
  db.knex('stats')
  .where({
    player: 'Randy Thomas'
  })
  .update({
    position: 'Special Teams'
  })
  .then(() => res.status(200).send('DB has been updated!'))
})

app.delete('/stats', (req, res) => {
  //DELETE
  db.knex('stats')
  .where({
    player: 'Randy Thomas'
  })
  .del()
  .then(() => res.status(200).send('Data deleted from DB!'))
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});