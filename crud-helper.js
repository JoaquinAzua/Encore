// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
// const Ticket = require('./models/ticket');
const Event = require('./models/event');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, ticket, event, order;
let users, tickets, events, orders;