import OrderModel from "./order.schema.js";

export const createNewOrderRepo = async (data) => {
  // Write your code here for placing a new order
  const newOrder = await new OrderModel(data).save();
  return OrderModel.findById(newOrder._id).populate({
    path: 'user',
    select: 'name email profileImg _id'
  });
};
