const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [
    {
      type: mongoose.ObjectId,
      ref: "product",
    },
  ],
  payment: {},
  buyer: {
    type: mongoose.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    default: "Not Process",
    enum: ["Not Process", "Processing", "Shipped", "delivered", "cancel"],
  },
}, 
{ timestamps: true}
);

const Order = mongoose.model("Order", orderSchema);
export default Order;