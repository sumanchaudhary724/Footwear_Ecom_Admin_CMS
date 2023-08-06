import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOTAPI;
const adminAPI = rootAPI + "/admin";
const catAPI = rootAPI + "/category";
const paymentOptAPI = rootAPI + "/payment-option";
const jwtAPI = rootAPI + "/get-new-access-jwt";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};
const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

// Assuming this function retrieves a new access JWT
const getNewAccessJWT = async () => {
  try {
    // Make an API call or perform any other operation to get the new access JWT
    // For example:
    const response = await axios.post(jwtAPI);
    const { status, accessJWT } = response.data;
    return { status, accessJWT };
  } catch (error) {
    console.error("Error getting new access JWT:", error);
    return { status: "error", accessJWT: null };
  }
};

const axiosProcessor = async ({
  method,
  url,
  obj,
  isPrivate,
  refreshToken,
}) => {
  const token = refreshToken ? getRefreshJWT() : getAccessJWT();

  const headers = {
    Authorization: isPrivate ? token : null,
  };
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
      headers,
    });

    return data;
  } catch (error) {
    if (
      error?.response?.status === 403 &&
      error?.response?.data?.message === "jwt expired"
    ) {
      //1. get new accessJWt
      const { status, accessJWT } = await getNewAccessJWT();
      if (status === "success" && accessJWT) {
        sessionStorage.setItem("accessJWT", accessJWT);
      }

      //2. continue the request

      return axiosProcessor({ method, url, obj, isPrivate, refreshToken });
    }
    return {
      status: "error",
      message: error.response ? error?.response?.data?.message : error.message,
    };
  }
};

// ========= admin api
export const getAdminInfo = () => {
  const obj = {
    method: "get",
    url: adminAPI,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const postNewAdmin = (data) => {
  const obj = {
    method: "post",
    url: adminAPI,
    obj: data,
  };
  return axiosProcessor(obj);
};
export const signInAdmin = (data) => {
  const obj = {
    method: "post",
    url: adminAPI + "/sign-in",
    obj: data,
  };
  return axiosProcessor(obj);
};
export const postNewAdminVerificationInfo = (data) => {
  const obj = {
    method: "post",
    url: adminAPI + "/admin-verification",
    obj: data,
  };
  return axiosProcessor(obj);
};

// ========= category api
export const postNewCategory = (data) => {
  const obj = {
    method: "post",
    url: catAPI,
    obj: data,
  };
  return axiosProcessor(obj);
};
export const getCategories = () => {
  const obj = {
    method: "get",
    url: catAPI,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const updateCategory = (data) => {
  const obj = {
    method: "put",
    url: catAPI,
    obj: data,
  };
  return axiosProcessor(obj);
};

export const deleteCategory = (_id) => {
  const obj = {
    method: "delete",
    url: catAPI + "/" + _id,
  };
  return axiosProcessor(obj);
};

// ==========+ get new refreshJWT

export const getNewRefreshJWT = () => {
  const obj = {
    method: "get",
    url: adminAPI + "/get-accessjwt",
    isPrivate: true,
    refreshToken: true,
  };
  return axiosProcessor(obj);
};
export const logoutAdmin = (_id) => {
  const obj = {
    method: "post",
    url: adminAPI + "/logout",
    obj: {
      _id,
      accessJWT: getAccessJWT(),
      refreshJWT: getRefreshJWT(),
    },
  };
  return axiosProcessor(obj);
};

// ========= payment api
export const postNewPayment = (data) => {
  const obj = {
    method: "post",
    url: paymentOptAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const getNewPaymentOPts = () => {
  const obj = {
    method: "get",
    url: paymentOptAPI,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const updatePaymentOpts = (data) => {
  const obj = {
    method: "put",
    url: paymentOptAPI,
    isPrivate: true,
    obj: data,
  };
  return axiosProcessor(obj);
};

export const deletePaymentOpts = (_id) => {
  const obj = {
    method: "delete",
    url: paymentOptAPI + "/" + _id,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
