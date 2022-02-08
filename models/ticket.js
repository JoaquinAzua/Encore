const Schema = require('mongoose').Schema;

const ticketSchema = new Schema({
  seat: {type: Number, min:1, max:6},
  table: {type: Schema.Types.ObjectId, ref:'Table'},
  price: {type: Number, required: true, default: 0},
}, {
  timestamps: true
});

module.exports = ('Ticket', ticketSchema);