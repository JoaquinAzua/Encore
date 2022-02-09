const Ticket = require('../../models/ticket');
// const Table = require('../../models/table')

module.exports = {
    index,
}

async function index(req, res) {
    const tickets = await Ticket.find({}).sort('seat').populate('table').exec();
    // resort based upon the sortOrder of the categories
    // tickets.sort('table');
    res.json(tickets);
}