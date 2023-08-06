import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { postNewPaymentAction } from "../../pages/payment-option/paymentAction";

export const NewPaymentForm = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();

  const handleOnAddPayment = () => {
    const { value } = nameRef.current;
    value && dispatch(postNewPaymentAction({ title: value }));
  };

  return (
    <div className="border p-4 rounded shadow-lg">
      <Row>
        <Col>
          <Form.Control placeholder="Card Name" ref={nameRef} />
        </Col>
        <Col className="d-grid">
          <Button variant="dark" onClick={handleOnAddPayment}>
            Add New Card
          </Button>
        </Col>
      </Row>
    </div>
  );
};
