import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SignIn from "./pages/signin-signup/SignIn";
import SignUp from "./pages/signin-signup/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />

        {/*private router */}
        <Route path="/new-admin" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
