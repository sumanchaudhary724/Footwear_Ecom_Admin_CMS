import { Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAdminProfileAction } from "../../pages/signin-signup/adminAction";
import { getAdminInfo } from "../../helper/axios";

export const AdminTable = () => {
  const { adminCollection } = useSelector((state) => state.adminInfo);

  const dispatch = useDispatch();

  const [admins, setadmins] = useState([]);
  console.log(admins);
  const getAllAdmins = async () => {
    const { admins } = await getAdminInfo();
    console.log(admins);
    setadmins(admins);
  };
  useEffect(() => {
    dispatch(getAdminProfileAction());
    getAllAdmins();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <div>{adminCollection.length} Admin Found</div>
        <div>
          <Form.Control placeholder="Search by name ..." />
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
    </>
  );
};
