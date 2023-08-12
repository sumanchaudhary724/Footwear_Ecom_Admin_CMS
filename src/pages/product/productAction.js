import { postNewProduct } from "../../helper/axios";
export const postNewProductAction = (data) => (dispatch) => {
  const pending = postNewProduct(data);
};
