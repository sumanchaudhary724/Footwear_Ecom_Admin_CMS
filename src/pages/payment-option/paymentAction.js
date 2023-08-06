import { toast } from "react-toastify";
import {
  getNewPaymentOPts,
  postNewPayment,
  updatePaymentOpts,
  deletePaymentOpts,
} from "../../helper/axios";
import { setPaymentOptions } from "./paymentSlice.js";
import { setModalShow } from "../../system/systemSlice";

export const postNewPaymentAction = (data) => async (dispatch) => {
  const { status, message } = await postNewPayment(data);

  toast[status](message);

  status === "success" && dispatch(getPaymentAction());
};

export const getPaymentAction = () => async (dispatch) => {
  const { status, result } = await getNewPaymentOPts();

  status === "success" && dispatch(setPaymentOptions(result));
};

export const updatePaymentOptAction = (data) => async (dispatch) => {
  const respPending = updatePaymentOpts(data);
  toast.promise(respPending, {
    pending: "please wait....",
  });

  const { status, message } = await respPending;

  toast[status](message);

  status === "success" && dispatch(getPaymentAction());
};

export const deletePaymentOptAction = (_id) => async (dispatch) => {
  const pending = deletePaymentOpts(_id);
  toast.promise(pending, {
    pending: "please wait....",
  });

  const { status, message } = await pending;

  toast[status](message);

  status === "success" && dispatch(getPaymentAction());
  dispatch(setModalShow(false));
};
