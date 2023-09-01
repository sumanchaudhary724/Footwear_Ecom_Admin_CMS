import { toast } from "react-toastify";
import { updataeProfile, updateProfilePassword } from "../../helper/axios";

export const updateProfileAction = (
  _id,
  fName,
  lName,
  address,
  email,
  password
) => {
  console.log(_id, fName, lName, address, email, password);

  const pendData = updataeProfile({
    _id,
    fName,
    lName,
    address,
    email,
    password,
  });
  console.log("Profile Update: ", pendData);
};

export const updateProfilePasswordAction = async (
  _id,
  newPassword,
  currentPassword
) => {
  console.log(_id, newPassword, currentPassword);
  const pending = updateProfilePassword({ _id, newPassword, currentPassword });

  console.log("Profile Password: ", pending);
};
