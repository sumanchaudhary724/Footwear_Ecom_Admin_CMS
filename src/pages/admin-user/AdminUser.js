import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AdminTable } from "../../components/admin-signup/AdminTable";

export const AdminUser = () => {
  return (
    <div>
      <AdminLayout title="AdminUser">
        <div className="text-end">
          <Link to="/new-admin" className="nav-link">
            <Button variant="warning">Add New Admin</Button>
          </Link>
          <hr />
          <AdminTable />
        </div>
      </AdminLayout>
    </div>
  );
};
