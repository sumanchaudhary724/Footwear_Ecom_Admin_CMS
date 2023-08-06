import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import {
  deletePaymentAction,
  updatePaymentAction,
} from "../../pages/payment-option/paymentAction";

export const EditPaymentForm = ({ payment }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({});

  useEffect(() => {
    setForm(payment);
  }, [dispatch, payment]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { _id, title, status } = form;

    dispatch(updatePaymentAction({ _id, title, status }));
  };

  const handleOnChange = (e) => {
    let { name, value, checked } = e.target;

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnDelete = () => {
    if (window.confirm("Are you sure you wnat to delete this payment option")) {
      dispatch(deletePaymentAction(payment._id));
    }
  };

  return (
    <Form onSubmit={handleOnSubmit} className="border p-4 rounded shadow-lg ">
      <Form.Group className="mt-3">
        <Form.Check
          type="switch"
          name="status"
          label="Status"
          checked={form.status === "active"}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Control
          placeholder="Card name"
          name="title"
          value={form.title}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="mt-3 d-grid">
        <Button variant="dark" type="submit">
          Update Payment
        </Button>
      </Form.Group>
      <Form.Group className="mt-3 d-grid">
        <Button variant="danger" onClick={handleOnDelete}>
          Delete Payment
        </Button>
      </Form.Group>
    </Form>
  );
};
