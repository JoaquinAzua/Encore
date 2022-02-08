const Event = require('../../models/event');

module.exports = {
    index,
}


async function index(req, res) {
    const events = await Event.find({});
    // resort based upon the sortOrder of the categories
    events.sort((a, b) => a.sortOrder - b.sortOrder);
    res.json(events);
}
