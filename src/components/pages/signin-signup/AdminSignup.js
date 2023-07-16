import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import CustomInput from "../../custom-input/CustomInput";

const AdminSignup = () => {
  const [form, setForm] = useState({});

  const handleOnSubmit = () => {};

  const handleOnChange = () => {};

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "Sam",
      type: "text",
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      placeholder: "smith",
      type: "text",
    },
    {
      label: "Phone ",
      name: "phone",

      placeholder: "04123456",
      type: "number",
    },
    {
      label: "Address",
      name: "address",

      placeholder: "222 george st Sydeny",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "Sam@smit.com",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "******",
      type: "password",
      minLength: "6",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      placeholder: "******",
      type: "password",
      minLength: "6",
    },
  ];
  return (
    <div>
      <Form
        onSubmit={handleOnSubmit}
        style={{ width: "450px" }}
        className="m-auto border p-4 shadow-lg mt-5 rounded"
      >
        <h3>Add New Admin</h3>
        {inputs.map((item, i) => {
          <CustomInput key={i} {...item} onChange={onChange} />;
        })}
      </Form>
    </div>
  );
};

export default AdminSignup;
