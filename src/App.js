import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SignIn from "./pages/signin-signup/SignIn";
import SignUp from "./pages/signin-signup/SignUp";
import AdminVerification from "./pages/signin-signup/AdminVerification";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Category } from "./pages/category/Category";
import { Product } from "./pages/product/Product";
import PaymentOption from "./pages/payment-option/PaymentOption";
import { Order } from "./pages/order/Order";
import { AdminUser } from "./pages/admin-user/AdminUser";
import { Customer } from "./pages/customer/Customer";
import { Profile } from "./pages/profile/Profile";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCatsAction } from "./pages/category/categoryAction";
import { PrivateRoute } from "./components/private/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatsAction());
  }, [dispatch]);
  return (
    <div className="">
      <Routes>
        {/* public routers */}
        <Route path="/" element={<SignIn />} />
        <Route path="admin-verification" element={<AdminVerification />} />

        {/* private router */}
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="category"
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        />
        <Route
          path="product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
        <Route
          path="payment-option"
          element={
            <PrivateRoute>
              <PaymentOption />
            </PrivateRoute>
          }
        />
        <Route
          path="order"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />
        <Route
          path="admin-user"
          element={
            <PrivateRoute>
              <AdminUser />
            </PrivateRoute>
          }
        />
        <Route
          path="new-admin"
          element={
            <PrivateRoute>
              <SignUp />
            </PrivateRoute>
          }
        />
        <Route
          path="customer"
          element={
            <PrivateRoute>
              <Customer />
            </PrivateRoute>
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
