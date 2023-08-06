import { toast } from "react-toastify";
import {
  deletePayment,
  getPayments,
  postNewPayment,
  updatePayment,
} from "../../helper/axios";
import { setPayments } from "./paymentSlice.js";

export const postNewPaymentAction = (obj) => async (dispatch) => {
  const { status, message } = await postNewPayment(obj);

  toast[status](message);

  if (status === "success") {
    //call the api to fetch all the cats and mount in the state
    dispatch(getPaymentAction());
  }
};
export const getPaymentAction = () => async (dispatch) => {
  const { status, result } = await getPayments();

  if (status === "success") {
    // mount in the state
    dispatch(setPayments(result));
  }
};
export const updatePaymentAction = (obj) => async (dispatch) => {
  const respPending = updatePayment(obj);
  toast.promise(respPending, {
    pending: "please wait....",
  });

  const { status, message } = await respPending;

  toast[status](message);

  if (status === "success") {
    //call the api to fetch all the cats and mount in the state
    dispatch(getPaymentAction());
  }
};
export const deletePaymentAction = (_id) => async (dispatch) => {
  const respPending = deletePayment(_id);
  toast.promise(respPending, {
    pending: "please wait....",
  });

  const { status, message } = await respPending;

  toast[status](message);

  if (status === "success") {
    //call the api to fetch all the cats and mount in the state
    dispatch(getPaymentAction());
  }
};
