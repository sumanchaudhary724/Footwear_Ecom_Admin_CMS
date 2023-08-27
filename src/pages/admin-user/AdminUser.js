import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { Link } from "react-router-dom";
import { Table, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAdminInfo, getAdmins } from "../../helper/axios";
import {
  getAdminCollectionAction,
  getAdminProfileAction,
} from "../signin-signup/adminAction";

export const AdminUser = () => {
  const { adminCollection } = useSelector((state) => state.adminInfo);

  const dispatch = useDispatch();

  const [admins, setadmins] = useState([]);
  console.log(admins);
  const getAllAdmins = async () => {
    const { admins } = await getAdmins();
    console.log(admins);
    setadmins(admins);
  };
  useEffect(() => {
    dispatch(getAdminCollectionAction());
    getAllAdmins();
  }, []);
  return (
    <AdminLayout title="Admin user">
      <div className="text-end">
        <Link to="/new-admin" className="nav-link">
          <Button variant="warning">Add New Admin</Button>

          <div className="mt-5">
            <div className="d-flex justify-content-between mb-3">
              <div> Profile found</div>
              <div>
                <Form.Control
                  type="text"
                  placeholder="search by product name ..."
                />
              </div>
            </div>
            <Table striped bordered hover className="text-start">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {adminCollection?.map((item, i) => (
                  <tr key={item._id}>
                    <td>Hello</td>
                    <td>{i + 1}</td>
                    <td>{item.fName}</td>
                    <td>{item.lName}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Link>
      </div>
    </AdminLayout>
  );
};
