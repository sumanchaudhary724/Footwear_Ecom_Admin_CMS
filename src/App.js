import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SignIn from "./pages/signin-signup/SignIn";
import SignUp from "./pages/signin-signup/SignUp";
import AdminVerification from "./pages/signin-signup/AdminVerification";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Category } from "./pages/category/Category";
import { Product } from "./pages/product/Product";
import { PaymentOption } from "./pages/payment-option/PaymentOption";
import { Order } from "./pages/order/Order";
import { AdminUser } from "./pages/admin-user/AdminUser";
import { Customer } from "./pages/customer/Customer";
import { Profile } from "./pages/profile/Profile";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCatsAction } from "./pages/category/categoryAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatsAction());
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/admin-verification" element={<AdminVerification />} />

        {/* private router */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/payment-option" element={<PaymentOption />} />
        <Route path="/order" element={<Order />} />
        <Route path="/admin-user" element={<AdminUser />} />
        <Route path="/new-admin" element={<SignUp />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
