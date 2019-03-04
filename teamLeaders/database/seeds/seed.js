const faker = require('faker');
const config = require('../../knexfile')

const getRandomInt = num => Math.floor(Math.random() * Math.floor(num));

const getRandomPosition = () => {
    const position = ['Offense', 'Defense', 'Special Teams'];
    return  `${position[getRandomInt(position.length)]}`;
}

const getRandomStat = () => {
    const stat = [5, 10, 20, 40, 50]
    return `${stat[getRandomInt(stat.length)]}`
}

const getRandomName = () => {
    const names = ['Marcus Peters', 'Randy Harvey', 'Marshawn Lynch']
    return `${names[getRandomInt(names.length)]}`
}

// const genImage = () => {
//     return `${faker.image.people(80, 80)}?random=${Date.now()}`
// }

const genData = (end) => {
    const records = [];
  
    for (let i = 0; i < end; i++) {
      let item = {
        // id: i,
            position: getRandomPosition(),
            player: getRandomName(),
            image: 'http://lorempixel.com/80/80/people?random=1551565656229',
            passing: getRandomStat(),
            rushing: getRandomStat(),
            receiving: getRandomStat(),
            touchdowns: getRandomStat(),
            tackles: getRandomStat(),
            sacks: getRandomStat(),
            interceptions: getRandomStat(),
            fumblesForced: getRandomStat(),
            fieldGoal: getRandomStat(),
            extraPoint: getRandomStat(),
      };
      records.push(item);
    }
    return records;
  };
  
  let set = genData(100000);

  let startTime = new Date().getTime();

  exports.seed = knex => knex.batchInsert('stats', set, 1000)
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => console.log('500k records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000)) // 1 mil
  .then(() => console.log('1 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => console.log('1.5 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000)) // 2 mil
  .then(() => console.log('2 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => console.log('2.5 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000)) // 3 mil
  .then(() => console.log('3 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => console.log('3.5 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000)) // 4 mil
  .then(() => console.log('4 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => console.log('4.5 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000)) // 5 mil
  .then(() => console.log('5 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => console.log('5.5 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000)) // 6 mill
  .then(() => console.log('6 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => console.log('6.5 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000)) // 7 mil
  .then(() => console.log('7 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => console.log('7.5 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000)) // 8 mil
  .then(() => console.log('8 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => console.log('8.5 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000)) // 9 mil
  .then(() => console.log('9 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => console.log('9.5 million records'))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000))
  .then(() => knex.batchInsert('stats', set, 1000)) // 10 mil
  .then(() => console.log('10m insertions took ', (new Date().getTime() - startTime) / 60000, 'minutes'));

// exports.seed = async function getData(knex) {
//     return knex('stats').del()
//     .then(function() {
//             const arr = [];
//             for (let i = 0; i < 100000; i++) {
//                 const obj = {
//                     id: i,
//                     position: getRandomPosition(),
//                     player: getRandomName(),
//                     image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                     passing: getRandomStat(),
//                     rushing: getRandomStat(),
//                     receiving: getRandomStat(),
//                     touchdowns: getRandomStat(),
//                     tackles: getRandomStat(),
//                     sacks: getRandomStat(),
//                     interceptions: getRandomStat(),
//                     fumblesForced: getRandomStat(),
//                     fieldGoal: getRandomStat(),
//                     extraPoint: getRandomStat(),
//                 }
//                 console.log('Saving Instance: ', i);
//                 arr.push(obj);
//             };
//             return knex.batchInsert('stats', arr)
//     })
//     .then(function() {
//         const arr = [];
//         for (let i = 100000; i < 200000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 200000; i < 300000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     })   
//     .then(function() {
//         const arr = [];
//         for (let i = 300000; i < 400000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 400000; i < 500000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     })   
//     .then(function() {
//         const arr = [];
//         for (let i = 500000; i < 600000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     })  
//     .then(function() {
//         const arr = [];
//         for (let i = 600000; i < 700000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     })  
//     .then(function() {
//         const arr = [];
//         for (let i = 700000; i < 800000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     })  
//     .then(function() {
//         const arr = [];
//         for (let i = 800000; i < 900000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     })  
//     .then(function() {
//         const arr = [];
//         for (let i = 900000; i < 1000000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     })  
//     .then(function() {
//         const arr = [];
//         for (let i = 1000000; i < 1100000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     })  
//     .then(function() {
//         const arr = [];
//         for (let i = 1100000; i < 1200000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 1200000; i < 1300000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 1300000; i < 1400000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 1400000; i < 1500000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 1500000; i < 1600000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 1600000; i < 1700000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 1700000; i < 1800000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 1800000; i < 1900000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 1900000; i < 2000000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 2000000; i < 2100000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 2100000; i < 2200000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 2200000; i < 2300000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 2300000; i < 2400000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 2400000; i < 2500000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 2500000; i < 2600000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 2600000; i < 2700000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 2700000; i < 2800000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 2800000; i < 2900000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 2900000; i < 3000000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 3000000; i < 3100000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 3100000; i < 3200000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 3200000; i < 3300000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 3300000; i < 3400000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 3400000; i < 3500000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 3500000; i < 3600000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 3600000; i < 3700000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 3700000; i < 3800000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 3800000; i < 3900000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 3900000; i < 4000000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 4000000; i < 4100000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 4100000; i < 4200000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 4200000; i < 4300000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 4300000; i < 4400000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 4400000; i < 4500000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 4500000; i < 4600000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 4600000; i < 4700000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 4700000; i < 4800000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 4800000; i < 4900000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 4900000; i < 5000000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 5000000; i < 5100000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 5100000; i < 5200000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 5200000; i < 5300000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 5300000; i < 5400000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 5400000; i < 5500000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 5500000; i < 5600000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 5600000; i < 5700000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 5700000; i < 5800000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 5800000; i < 5900000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 5900000; i < 6000000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 6000000; i < 6100000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 6100000; i < 6200000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 6200000; i < 6300000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 6300000; i < 6400000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 6400000; i < 6500000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 6500000; i < 6600000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 6600000; i < 6700000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 6700000; i < 6800000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 6800000; i < 6900000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 6900000; i < 7000000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 7000000; i < 7100000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 7100000; i < 7200000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 7200000; i < 7300000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 7300000; i < 7400000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 7400000; i < 7500000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 7500000; i < 7600000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 7600000; i < 7700000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 7700000; i < 7800000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 7800000; i < 7900000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 7900000; i < 8000000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 8000000; i < 8100000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 8100000; i < 8200000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 8200000; i < 8300000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 8300000; i < 8400000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 8400000; i < 8500000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 8500000; i < 8600000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 8600000; i < 8700000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 8700000; i < 8800000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 8800000; i < 8900000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 8900000; i < 9000000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 9000000; i < 9100000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 9100000; i < 9200000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 9200000; i < 9300000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 9300000; i < 9400000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 9400000; i < 9500000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 9500000; i < 9600000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 9600000; i < 9700000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 9700000; i < 9800000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 9800000; i < 9900000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
//     .then(function() {
//         const arr = [];
//         for (let i = 9900000; i < 10000000; i++) {
//             const obj = {
//                 id: i,
//                 position: getRandomPosition(),
//                 player: getRandomName(),
//                 image: 'http://lorempixel.com/80/80/people?random=1551565656229',
//                 passing: getRandomStat(),
//                 rushing: getRandomStat(),
//                 receiving: getRandomStat(),
//                 touchdowns: getRandomStat(),
//                 tackles: getRandomStat(),
//                 sacks: getRandomStat(),
//                 interceptions: getRandomStat(),
//                 fumblesForced: getRandomStat(),
//                 fieldGoal: getRandomStat(),
//                 extraPoint: getRandomStat(),
//             }
//             console.log('Saving Instance: ', i);
//             arr.push(obj);
//         };
//         return knex.batchInsert('stats', arr)   
//     }) 
// }