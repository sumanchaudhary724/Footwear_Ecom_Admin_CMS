import { toast } from "react-toastify";
import { updateProfile, updateProfilePassword } from "../../helper/axios";
import {
  updateProfileSuccess,
  updateProfileFailure,
  updatePasswordSuccess,
  updatePasswordFailure,
} from "./profileSlice.js";

// Update the profile with Redux state dispatch
export const updateProfileAction = (formData) => {
  return async (dispatch) => {
    try {
      // Make the HTTP request to update the profile using Axios
      const response = await updateProfile(formData);

      // Assuming the response contains the updated profile data
      dispatch(updateProfileSuccess(response.data));
      toast.success("Profile updated successfully"); // Show a success toast
    } catch (error) {
      console.error("Profile Update Error:", error);
      dispatch(updateProfileFailure(error));
      toast.error("Failed to update profile"); // Show an error toast
    }
  };
};

// Update the password with Redux state dispatch
export const updateProfilePasswordAction = (formData) => {
  return async (dispatch) => {
    try {
      // Make the HTTP request to update the password using Axios
      await updateProfilePassword(formData);

      dispatch(updatePasswordSuccess()); // No data is returned on success
      toast.success("Password updated successfully"); // Show a success toast
    } catch (error) {
      console.error("Password Update Error:", error);
      dispatch(updatePasswordFailure(error));
      toast.error("Failed to update password"); // Show an error toast
    }
  };
};
