import { toast } from "react-toastify";
import {
  getAdminInfo,
  getAdmins,
  getNewRefreshJWT,
  postNewAdmin,
  signInAdmin,
  updateAdminProfile,
} from "../../helper/axios";
import { setAdmin, setadminCollection } from "./adminSlice";

export const createNewAdminAction = async (obj) => {
  const pendingResp = postNewAdmin(obj);

  toast.promise(pendingResp, {
    pending: "Please await..",
  });
  const { status, message } = await pendingResp;
  toast[status](message);
};

export const signInAdminAction = (obj) => async (dispatch) => {
  const pendingResp = signInAdmin(obj);

  toast.promise(pendingResp, {
    pending: "Please await..",
  });
  const { status, message, token } = await pendingResp;

  toast[status](message);

  if (status === "success") {
    sessionStorage.setItem("accessJWT", token.accessJWT);
    localStorage.setItem("refreshJWT", token.refreshJWT);

    dispatch(getAdminProfileAction());
  }

  //get the user data and mount in the state
};

//get admin profile
export const getAdminProfileAction = () => async (dispatch) => {
  //call the api to get user info
  const { status, user } = await getAdminInfo();
  //mount the state with the user data

  if (status === "success") {
    dispatch(setAdmin(user));
  }
};

export const getAdminCollectionAction = () => async (dispatch) => {
  //call the api to get user info
  const { status, message, admins } = await getAdmins();
  //mount the state with the user data
  console.log(admins);
  toast[status](message);
  if (status === "success") {
    dispatch(setadminCollection(admins));
  }
};

// New action for updating admin profile
export const updateProfileUser = (userObj) => async (dispatch) => {
  const pendingResp = updateAdminProfile(userObj);
  toast.promise(pendingResp, { Pending: "Please Wait" });
  const { status, message } = await pendingResp;
  toast[status](message);
  dispatch(getAdminProfileAction());
};

export const autoLogin = () => async (dispatch) => {
  // check if accessJWT exist in session

  const accessJWT = sessionStorage.getItem("accessJWT");
  if (accessJWT) {
    return dispatch(getAdminProfileAction());
  }

  const refreshJWT = localStorage.getItem("refreshJWT");
  if (refreshJWT) {
    // request new accessJWT from server and all getAdminProfile

    const { accessJWT } = await getNewRefreshJWT();

    if (accessJWT) {
      sessionStorage.setItem("accessJWT", accessJWT);
      dispatch(getAdminProfileAction());
    }
  }
};
