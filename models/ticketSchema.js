const Schema = require('mongoose').Schema;

const ticketSchema = new Schema({
//   row, (tablemodel)
//   seat, 
//   section(table)
  event: {type: Schema.Types.ObjectId, ref:'Event'},
  price: {type: Number, required: true, default: 0},
}, {
  timestamps: true
});

module.exports = itemSchema;