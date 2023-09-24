import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { useSelector } from "react-redux";

export const Order = () => {
  const { orders } = useSelector((store) => store.orderInfo);

  const rows = orders.map((item) => {
    return { ...item.user, ...item.payment, id: item._id, status: item.status };
  });

  return (
    <AdminLayout title="Orders">
      <div className="container mt-4">
        <div className="table-responsive">
          <table className="table table-bordered">
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
                  <td>{row.isPaid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};
