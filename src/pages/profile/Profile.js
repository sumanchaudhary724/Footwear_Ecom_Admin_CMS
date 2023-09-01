import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProfileAction,
  updateProfilePasswordAction,
} from "./profileAction";

export const Profile = () => {
  const dispatch = useDispatch();

  const { admin } = useSelector((state) => state.adminInfo);

  const [form, setForm] = useState({});
  const [passd, setPassd] = useState({});

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

  const handleOnPassChange = (e) => {
    const { value, name } = e.target;

    setPassd({
      ...passd,
      [name]: value,
    });
  };

  useEffect(() => {
    setForm(admin);
  }, []);

  const handleOnPforileSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const { _id, fName, lName, address, email, password } = form;
    updateProfileAction(_id, fName, lName, address, email, password);
    // updateProfileAction(form)
  };

  const handleOnPasswordSubmit = (e) => {
    e.preventDefault();
    if (passd.newPassword === passd.confirmPassword) {
      const { newPassword, currentPassword } = passd;
      updateProfilePasswordAction(form._id, newPassword, currentPassword);
    }
  };

  return (
    <div>
      <AdminLayout title="Profile">
        <Form onSubmit={handleOnPforileSubmit}>
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
        <Form onSubmit={handleOnPasswordSubmit}>
          {pass.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnPassChange} />
          ))}
          <div className="d-grid">
            <Button variant="primary" type="submit">
              Update Password
            </Button>
          </div>
        </Form>
      </AdminLayout>
    </div>
  );
};
