const Schema = require('mongoose').Schema;

const tableSchema = new Schema({
  row: {type: String},
  column: {type:Number},
  event: {type: Schema.Types.ObjectId, ref:'Event'},
  ticket: {type: Schema.Types.ObjectId, ref:'Ticket', max:6},
  price: {type: Number, required: true, default: 0},
}, {
  timestamps: true
});

module.exports = ('Table', tableSchema);