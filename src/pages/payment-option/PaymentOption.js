import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { NewPaymentForm } from "../../components/payment-option/NewPaymentForm";
import { PaymentOptionTable } from "../../components/payment-option/PaymentTable";

export const PaymentOption = () => {
  return (
    <AdminLayout title="Payment Option">
      <NewPaymentForm />
      <PaymentOptionTable />
    </AdminLayout>
  );
};
