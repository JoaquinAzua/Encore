require('dotenv').config();
require('./config/database');

const Event = require('./models/event');
const Ticket = require('./models/ticket');
const Table = require('./models/table');

(async function() {

  await Event.deleteMany({});
  const events = await Event.create([
    {name: 'Red Hot Chili Peppers', genre: 'Rock', date: '2022-03-05', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOrhXl-9z6Eipj7_HZLO7ndBZnr7x5_-AQQ&usqp=CAU"  , sortOrder: 10},
    {name: 'J.Cole', genre: 'Rap', date: '2022-03-19', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf58DL6cQ4EGX86x2HAWl8Oorf6wW7phJ8XQ1_OhW4tFcaJUb79AjiJNFh2AlnRorbLSA&usqp=CAU", sortOrder: 20},
    {name: 'Andrew Schulz', genre: 'Comedy', date: '2022-04-02', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFSpO2wmMY3UbVVcDjtOnCtZJXrLOF5ywZrg&usqp=CAU", sortOrder: 30},
    {name: 'Masego', genre: 'R&B', date: '2022-04-16',image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbORszaokNjRiBNjG04vwscF75I-_Rwnc0A&usqp=CAU", sortOrder: 40},
    {name: 'Bill Burr', genre: 'Comedy', date: '2022-04-30', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJa2d3xnV9U3otaEU0tCOq9q8q8ZrTtO9l_g&usqp=CAU", sortOrder: 50},
    
  ]);
  
  await Table.deleteMany({});
  const tables = await Table.create([
    {row: 'A', column: 1, maxTickets: 6, full: false },
    {row: 'A', column: 2, maxTickets: 6, full: false },
    {row: 'A', column: 3, maxTickets: 6, full: false },
    {row: 'A', column: 4, maxTickets: 6, full: false },
    {row: 'A', column: 5, maxTickets: 6, full: false },
    {row: 'B', column: 1, maxTickets: 6, full: false },
    {row: 'B', column: 2, maxTickets: 6, full: false },
    {row: 'B', column: 3, maxTickets: 6, full: false },
    {row: 'B', column: 4, maxTickets: 6, full: false },
    {row: 'B', column: 5, maxTickets: 6, full: false },
    {row: 'C', column: 1, maxTickets: 6, full: false },
    {row: 'C', column: 2, maxTickets: 6, full: false },
    {row: 'C', column: 3, maxTickets: 6, full: false },
    {row: 'C', column: 4, maxTickets: 6, full: false },
    {row: 'C', column: 5, maxTickets: 6, full: false },
    {row: 'D', column: 1, maxTickets: 6, full: false },
    {row: 'D', column: 2, maxTickets: 6, full: false },
    {row: 'D', column: 3, maxTickets: 6, full: false },
    {row: 'D', column: 4, maxTickets: 6, full: false },
    {row: 'D', column: 5, maxTickets: 6, full: false },
    
  ]);
  await Ticket.deleteMany({});
  for(let table of tables) {
    await Ticket.create([
      {seat: 1, price: 100, table},
      {seat: 2, price: 100, table},
      {seat: 3, price: 100, table},
      {seat: 4, price: 100, table},
      {seat: 5, price: 100, table},
      {seat: 6, price: 100, table},
      
    ]);
  }

  process.exit();

})();
