const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  seat: {type: Number, min:1, max:6},
  price: {type: Number, required: true, default: 0},
  table: {type: Schema.Types.ObjectId, ref: 'Table'}
}, {
  timestamps: true,
  toJSON: {virtuals:true},
});

// ticketSchema.virtual('cartTotal').get(function () {
//   let total = 0;
//   for (this.price.length) {
//     total += this.price
//   }
//   return total;
// })



module.exports = mongoose.model('Ticket', ticketSchema);