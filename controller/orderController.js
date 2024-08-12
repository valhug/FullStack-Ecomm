import Order from '../models/orderModel.js';
// user all orders

export const allOrderController = async ( req, res ) => {
  try {
    const orders = await Order.find({ buyer: req.user?._id})
      .populate("Products", "-photo")
      .populate("buyer", "name");
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Getting Orders",
      error,
    });
  }
}
// admin all Orders
// export const allAdminOrderController = async (req, res ) => {
/*   try {
    const orders = await Order.find({})
      .populate("products", "-photo")
      .populate("buyer", "name")
      .sort( { createdAt: "-1"});
    res.json(orders);
  } catch( error ) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Admin Orders",
      error,
    });
  }; */

export const allAdminOrderController = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("products", "-photo")
      .populate("buyer", "name")
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch(error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Admin Orders",
      error: error.message,
    });
  }
};