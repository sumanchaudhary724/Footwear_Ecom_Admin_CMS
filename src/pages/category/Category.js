import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { NewCatForm } from "../../components/category/NewCatForm";
import { CatsTable } from "../../components/category/CatsTable";

export const Category = () => {
  return (
    <AdminLayout title="Category">
      {/* form  */}
      <NewCatForm />
      {/* table  */}
      <CatsTable />
    </AdminLayout>
  );
};
