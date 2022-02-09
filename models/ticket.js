const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  seat: {type: Number, min:1, max:6},
  price: {type: Number, required: true, default: 0},
  table: {type: Schema.Types.ObjectId, ref: 'Table'}
}, {
  timestamps: true
});

module.exports = mongoose.model('Ticket', ticketSchema);