const Schema = require('mongoose').Schema;

const tableSchema = new Schema({
  row: {type: String},
  column: {type:Number},
//   event: {type: Schema.Types.ObjectId, ref:'Event'},
  ticket: {type: Schema.Types.ObjectId, ref:'Ticket', max:6},
  full: {type: Boolean},
}, {
  timestamps: true
});

module.exports = ('Table', tableSchema);