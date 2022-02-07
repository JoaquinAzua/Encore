require('dotenv').config();
require('./config/database');

const Event = require('./models/event');

(async function() {

  await Event.deleteMany({});
  const events = await Event.create([
    {name: 'Red Hot Chili Peppers', genre: 'Rock', date: '2022-03-05', sortOrder: 10},
    {name: 'J.Cole', genre: 'Rap', date: '2022-03-19', sortOrder: 20},
    {name: 'Andrew Schulz', genre: 'Comedy', date: '2022-04-02', sortOrder: 30},
    {name: 'Masego', genre: 'R&B', date: '2022-04-16', sortOrder: 40},
    {name: 'Bill Burr', genre: 'Comedy', date: '2022-04-30', sortOrder: 50},
    
  ]);

  console.log(event)

  process.exit();

})();
