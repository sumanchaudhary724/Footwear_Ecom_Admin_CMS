import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { NewPaymentForm } from "../../components/payment/NewPaymentForm";
import { PaymentsTable } from "../../components/payment/PaymentTable";

export const PaymentOption = () => {
  return (
    <AdminLayout title="Payment Option">
      <NewPaymentForm />
      <PaymentsTable />
    </AdminLayout>
  );
};
