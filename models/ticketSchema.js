const Schema = require('mongoose').Schema;

const ticketSchema = new Schema({
  name: {type: String, required: true},
  image: String,
  event: {type: Schema.Types.ObjectId, ref:'Event'},
  price: {type: Number, required: true, default: 0},
}, {
  timestamps: true
});

module.exports = itemSchema;