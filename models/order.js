const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const orderSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    tickets: [{type: Schema.Types.ObjectId, ref: 'Ticket'}],
    isPaid: {type: Boolean, default: false}
    }, {
    timestamps: true,
    toJSON: { virtuals: true }
    });

orderSchema.statics.getCart = function(userId) {
    // 'this' refers to the Order model
    return this.findOneAndUpdate(
        // query obj
        {user: userId, isPaid: false},
        // update obj
        {user: userId},
        // options obj
        // upsert option creates the doc if it doesn't exist!
        // new option will make sure the updated doc is returned
        {upsert: true, new: true}
    ).populate('tickets')
};

orderSchema.virtual('orderTotal').get(function() {
    // 'this' refers to the order document
    return this.tickets.reduce((total, ticket) => total + ticket.price, 0);
  });




module.exports = mongoose.model('Order', orderSchema);