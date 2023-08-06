import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { EditPaymentForm } from "./EditPaymentForm";
import { useEffect, useState } from "react";
import { CustomModal } from "../customModal/customModal.js";
import { setModalShow } from "../../system/systemSlice";
import { getPaymentAction } from "../../pages/payment-option/paymentAction";

export const PaymentsTable = () => {
  const dispatch = useDispatch();
  const [selectedPayment, setSelectedPayment] = useState({});
  const { payments } = useSelector((state) => state.paymentInfo);
  useEffect(() => {
    dispatch(getPaymentAction());
  }, [dispatch]);

  const handleOnEdit = (obj) => {
    setSelectedPayment(obj);
    dispatch(setModalShow(true));
  };
  return (
    <>
      <CustomModal title="Edit Payment">
        <EditPaymentForm payment={selectedPayment} />
      </CustomModal>
      <div className="d-flex justify-content-between mt-5">
        <div>3 Payment methods found </div>
        <div>
          <Form.Control placeholder="Serach by name ..." />
        </div>
      </div>
      <Table striped bordered hover className="mt-2 ">
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(({ _id, status, title, description }, i) => (
            <tr key={_id}>
              <td>{i + 1}</td>
              <td>
                <span
                  className={
                    status === "active"
                      ? "bg-success p-2 rounded"
                      : "bg-danger p-2 rounded"
                  }
                >
                  {status}
                </span>
              </td>
              <td> {title}</td>
              <td>{description}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() =>
                    handleOnEdit({ _id, status, title, description })
                  }
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
