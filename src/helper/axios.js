import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOTAPI;
const adminAPI = rootAPI + "/admin";

const axiosProcessor = async ({ method, url, obj }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.response ? error?.response?.data?.message : error.message,
      error,
    };
  }
};

// ========= admin api
export const postNewAdmin = (data) => {
  const obj = {
    method: "post",
    url: adminAPI,
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
