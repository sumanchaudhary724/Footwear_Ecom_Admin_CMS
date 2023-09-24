import { getOrders, updateOrder } from "../../helper/axios";
import { setOrder } from "../../pages/order/orderSlice";

export const getOrderAction = () => async (dispatch) => {
  const { status, message, result } = await getOrders();
  if (status === "success") {
    dispatch(setOrder(result));
  }
};

export const updateOrderAction = (obj) => async (dispatch) => {
  const { status, message } = updateOrder(obj);
  if (status === "success") {
    dispatch(getOrderAction());
  }
};
