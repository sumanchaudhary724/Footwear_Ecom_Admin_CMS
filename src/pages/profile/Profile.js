import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProfileAction,
  updateProfilePasswordAction,
} from "./profileAction";
import { setModalShow } from "../../system/systemSlice"; // Import the action to set modal visibility
import { CustomModal } from "../../components/customModal/customModal.js"; // Import the CustomModal component

export const Profile = () => {
  const dispatch = useDispatch();

  const { admin } = useSelector((state) => state.adminInfo);

  const [form, setForm] = useState({});
  const [passd, setPassd] = useState({});
  const [showPasswordModal, setShowPasswordModal] = useState(false); // State to manage the password update modal

  const handleOnProfileChange = (e) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const pass = [
    {
      label: "Current Password",
      name: "currentPassword",
      type: "password",
      required: true,
    },
    {
      label: "New Password",
      name: "newPassword",
      type: "password",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      required: true,
    },
  ];

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      value: form?.fName,
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      value: form?.lName,
      required: true,
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      value: form?.address,
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "text",
      value: form?.phone,
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "text",
      value: form?.email,
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
    },
  ];

  const handleOnPasswordChange = (e) => {
    const { value, name } = e.target;

    setPassd({
      ...passd,
      [name]: value,
    });
  };

  useEffect(() => {
    setForm(admin);
  }, [admin]);

  const handleOnProfileSubmit = (e) => {
    e.preventDefault();
    const { _id, fName, lName, address, email, password } = form;
    dispatch(updateProfileAction(_id, fName, lName, address, email, password));
  };

  const handleOnPasswordSubmit = (e) => {
    e.preventDefault();
    if (passd.newPassword === passd.confirmPassword) {
      const { newPassword, currentPassword } = passd;
      dispatch(
        updateProfilePasswordAction(form._id, newPassword, currentPassword)
      );
      setShowPasswordModal(false); // Close the password update modal after submitting
    }
  };

  const handleOnChangePassword = (obj) => {
    setShowPasswordModal(obj);
    dispatch(setModalShow(true));
  };

  return (
    <div>
      <AdminLayout title="Profile">
        <Form onSubmit={handleOnProfileSubmit}>
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnProfileChange} />
          ))}
          <div className="d-grid">
            <Button variant="primary" type="submit">
              Update Profile
            </Button>
          </div>
        </Form>
        <hr />
        <Button variant="primary" onClick={handleOnChangePassword}>
          Change Password
        </Button>
      </AdminLayout>

      {/* Password Update Modal */}
      <CustomModal
        title="Update Password"
        show={showPasswordModal}
        onHide={() => setShowPasswordModal(false)}
      >
        {/* Password update form */}
        <Form onSubmit={handleOnPasswordSubmit}>
          {/* Password update form inputs */}
          {pass.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnPasswordChange} />
          ))}
          <div className="d-grid">
            <Button variant="primary" type="submit">
              Update Password
            </Button>
          </div>
        </Form>
      </CustomModal>
    </div>
  );
};
