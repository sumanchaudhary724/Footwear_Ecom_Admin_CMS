import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { getOrderAction } from "../../pages/order/orderAction";

export const Order = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.orderInfo);

  useEffect(() => {
    // Dispatch the action to fetch orders when the component mounts
    dispatch(getOrderAction());
  }, [dispatch]);

  const rows = orders.map((item) => {
    return {
      ...item.user,
      ...item.payment,
      id: item._id,
      status: item.status,
      isPaid: item.payment.isPaid,
    };
  });

  return (
    <AdminLayout title="Orders">
      <div className="mt-5">
        <div className="d-flex justify-content-between mb-3">
          <Table striped bordered hover className="text-start">
            <thead className="thead-light">
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Status</th>
                <th scope="col">First Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Method</th>
                <th scope="col">IS Paid</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.status}</td>
                  <td>{row.fName}</td>
                  <td>{row.totalAmount}</td>
                  <td>{row.method}</td>
                  <td>
                    {row.isPaid ? (
                      <span style={{ color: "green" }}>Yes</span>
                    ) : (
                      <span style={{ color: "red" }}>No</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
};
