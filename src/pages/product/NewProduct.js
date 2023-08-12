import React, { useState } from "react";
import { AdminLayout } from "../layout/AdminLayout";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { CustomeInput } from "../customeInput/CustomeInput";
const initialState = {
  status: "inactive",
};
export const NewProduct = () => {
  const [form, setForm] = useState(initialState);
  const inputs = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Denim Pants",
      required: true,
    },
    {
      name: "sku",
      label: "SKU",
      type: "text",
      placeholder: "DENIM-TV-30",
      required: true,
    },
    {
      name: "qty",
      label: "QUANTITY",
      type: "number",
      placeholder: "50",
      required: true,
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "$ 3000",
      required: true,
    },
    {
      name: "salesPrice",
      label: "Sales Price",
      type: "number",
      placeholder: "$ 3000",
    },
    {
      name: "salesStartDate",
      label: "Sales Start Date",
      type: "Date",
    },
    {
      name: "salesEndDate",
      label: "Sales End Date",
      type: "Date",
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      as: "textarea",
      placeholder: "Product Description",
      required: true,
    },
  ];
  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <AdminLayout>
      <div>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Check
              name="status"
              type="switch"
              label="Status"
              onChange={handleOnChange}
            ></Form.Check>
          </Form.Group>
          {inputs.map((item, index) => (
            <CustomeInput key={index} {...item} onChange={handleOnChange} />
          ))}
          <div className="d-grid newProduct">
            <Button variant="primary" type="submit">
              Submit
            </Button>{" "}
          </div>
        </Form>
      </div>
    </AdminLayout>
  );
};
