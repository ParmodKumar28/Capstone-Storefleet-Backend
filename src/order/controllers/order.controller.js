// Please don't change the pre-written code
// Import the necessary modules here

import { createNewOrderRepo } from "../model/order.repository.js";
import { ErrorHandler } from "../../../utils/errorHandler.js";

export const createNewOrder = async (req, res, next) => {
  // Write your code here for placing a new order
  try {
    const orderData = req.body;
    orderData.user = req.user;
    const newOrder = await createNewOrderRepo(orderData);
    if(!newOrder)
    {
      return next(new ErrorHandler(400, "Order not created! some error occured!"));
    }
    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order: newOrder
    })
  } catch (error) {
    return next(new ErrorHandler(400, error));
  }
};
