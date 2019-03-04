# GET /espn/feeds

  - Request received from client when app component mounts
  - Queries database and finds 10 most recently created records
  – JSON formatted response
  - Responds with 200 status code indicating success
  – Response sent to client to populate Feeds component

  ## ROUTE

  ```javascript
  app.get('/espn/feeds', (req, res) => {
  Feeds.query((qb) => {
    qb.limit(10);
  })
    .orderBy('timestamp', 'DESC')
    .fetchAll()
    .then((data) => {
      const records = data.models;
      return records.map((rec) => {
        return rec.attributes;
      });
    })
    .then(rows => res.status(200).send(rows))
    .catch(err => console.log(err))
  });
  ```
  ## RESPONSE
  ```json
  [
    {
        "id": 9500001,
        "author": "Carole Pagac",
        "authorphoto": "http://lorempixel.com/28/28",
        "title": "Concrete",
        "bigphoto": "http://lorempixel.com/600/400",
        "smallphoto": "http://lorempixel.com/200/150",
        "newsfeed": "Minus ut vero qui et ab rem voluptates modi. Quae iusto et velit quia impedit. Enim voluptas id recusandae deleniti.",
        "videoclip": "https://www.youtube.com/embed/nKLkj0FzoEo",
        "timestamp": "2019-02-05T17:05:44.370Z"
    },
    .
    .
    .
    . 8 more records
    .
    .
    .
    .
    {
      "id": 9500000,
      "author": "Barney Gleason",
      "authorphoto": "http://lorempixel.com/28/28",
      "title": "Architect leverage grey",
      "bigphoto": "http://lorempixel.com/600/400",
      "smallphoto": "http://lorempixel.com/200/150",
      "newsfeed": "Perspiciatis blanditiis ut vero laboriosam quia omnis dolores sed omnis. Maxime ipsam recusandae ipsum fugit sit. Et itaque consequatur aperiam nulla perspiciatis voluptatem eum. Quia id non non vel reprehenderit. Facere ipsa distinctio velit dolorem cupiditate qui rerum ducimus possimus. Et sit soluta quis iusto aspernatur dolorem sint velit.",
      "videoclip": "https://www.youtube.com/embed/nKLkj0FzoEo",
      "timestamp": "2019-02-05T17:05:44.370Z"
    }
  ]
  ```
------------------------------------------------------------------
# GET /espn/feeds/:id

  - Request provided with parameter 'id'
  - Queries db with provided id attribute
  - Responds with 200 status code indicating success

  ## ROUTE
  ```javascript
  app.get('/espn/feeds/:id', (req, res) => {
  const { id } = req.params;
  new Feed({id: id})
    .fetch()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(err => console.log('ERROR: ', err));
  });
  ```
  ## RESPONSE
  ```json
  {
    "id": 10000000,
    "author": "grimbus mccranston",
    "authorphoto": "http://lorempixel.com/28/28",
    "title": "Baby Fresh Central",
    "bigphoto": "http://lorempixel.com/600/400",
    "smallphoto": "http://lorempixel.com/200/150",
    "newsfeed": "Suscipit sint dignissimos. Suscipit ut ipsum facere eligendi qui. Facere dolorum quae natus necessitatibus.",
    "videoclip": "https://www.youtube.com/embed/nKLkj0FzoEo",
    "timestamp": "2019-02-05T16:47:23.692Z"
  }
  ```
------------------------------------------------------------------
# POST /espn/feeds

  - Request body object representative of db Model to be inserted
  - Inserts new record into db
  - Response sends 201 status code, confirms new record insertion, logs if record exists, or logs error during insertion

  ## ROUTE
  ```javascript
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
  ```
  ## RESPONSE
  ```json
  {
    "id": 10000000,
    "author": "Dana Rempel",
    "authorphoto": "http://lorempixel.com/28/28",
    "title": "Baby Fresh Central",
    "bigphoto": "http://lorempixel.com/600/400",
    "smallphoto": "http://lorempixel.com/200/150",
    "newsfeed": "Suscipit sint dignissimos. Suscipit ut ipsum facere eligendi qui. Facere dolorum quae natus necessitatibus.",
    "videoclip": "https://www.youtube.com/embed/nKLkj0FzoEo",
    "timestamp": "2019-02-05T16:47:23.692Z"
  }
  log's
  ```
------------------------------------------------------------------
# PATCH /espn/feeds

  - Request body supplies id of record and attribute to be altered
  - Updates record in db with supplied request body information
  - Responds with 204 status code

  ## ROUTE
  ```javascript
  app.patch('/espn/feeds', (req, res) => {

  /* In this route, the request body would be supplied with a record ID and the attribute to be changed */

  const id = 10000000;
  const author = 'bill dabler';

  Feed.forge({id: id})
    .save({author: author}, {patch: true})
    .then((altered) => res.status(204).send(altered));
  });
  ```
  ## RESPONSE
  ```json
  {
    "id": 10000000,
    "author": "bill dabler"
  }
  ```
------------------------------------------------------------------
# DELETE /espn/feeds/:id

  - Request receives id from client to indicate which record needs to be deleted
  - Searches db with supplied id and deletes record from db
  - Response sends 204 status code and empty JSON object signifying deleted record
  ## ROUTE
  ```javascript
  app.delete('/espn/feeds/:id', (req, res) => {
  const { id } = req.params;

  Feed.forge({id: id})
    .destroy()
    .then(record => res.status(204).send(record))
    .then(() => console.log('Record deleted'))
    .catch(err => console.log('Error deleting', err))
  });
  ```
  ## RESPONSE
  ```json
  {}
  ```