const Schema = require('mongoose').Schema;


const eventSchema = new Schema({
  name: {type: String, required: true },
  genre: {type: String},
  date: {type: Date, required: true },
  sortOrder: Number,
}, {
  timestamps: true
});

module.exports = ('Event', eventSchema);