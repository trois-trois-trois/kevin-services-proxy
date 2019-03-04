const faker = require('faker');

const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
};

const getUrl = () => {
  let urls = ['https://www.youtube.com/embed/zhuIU4wKAGw',  'https://www.youtube.com/embed/Mfi5NqBTj-Q', 'https://www.youtube.com/embed/w5mtQwDiXfw', 'https://www.youtube.com/embed/nKLkj0FzoEo', 'https://www.youtube.com/embed/_nCuFICMfMw'];

  return urls[getRandomInt(urls.length - 1)];
};


const generateData = (numRecs) => {
  const records = [];

  for (let i = 0; i < numRecs; i++) {
    let item = {
      author: 'jared horne',
      authorphoto: 'https://picsum.photos/28/28',
      title: faker.random.words(),
      bigphoto: 'https://picsum.photos/600/400',
      smallphoto: 'https://picsum.photos/200/150',
      newsfeed: faker.lorem.paragraph(),
      videoclip: getUrl()
    };
    records.push(item);
  }
  return records;
};

let set = generateData(100000);

const startTime = new Date().getTime();

exports.seed = knex => knex.batchInsert('feeds', set, 1000)
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 1 mil
  .then(() => console.log('1 million records'))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 2 mil
  .then(() => console.log('2 million records'))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 3 mil
  .then(() => console.log('3 million records'))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 4 mil
  .then(() => console.log('4 million records'))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 5 mil
  .then(() => console.log('5 million records'))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 6 mill
  .then(() => console.log('6 million records'))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 7 mil
  .then(() => console.log('7 million records'))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 8 mil
  .then(() => console.log('8 million records'))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 9 mil
  .then(() => console.log('9 million records'))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 10 mil
  .then(() => console.log('10m insertions took ', new Date().getTime() - startTime, 'ms'));
