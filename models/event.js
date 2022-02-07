const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: { type: String, required: true },
  genre: { String, required: true},
  date: {type: Date, required: true },
  sortOrder: Number,
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);