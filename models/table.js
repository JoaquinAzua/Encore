const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
  row: {type: String},
  column: {type:Number},
  maxTickets: {type: Number},
  full: {type: Boolean},
}, {
  timestamps: true
});

module.exports = mongoose.model('Table', tableSchema);