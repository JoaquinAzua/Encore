const Table = require('../../models/table');

module.exports = {
    index, 
}



async function index(req, res) {
    const tables = await Table.find({});
    // resort based upon the sortOrder of the categories
    // events.sort((a, b) => a.sortOrder - b.sortOrder);
    res.json(tables);
}