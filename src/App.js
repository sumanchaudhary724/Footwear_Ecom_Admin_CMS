import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Signin from "./components/pages/signin-signup/Signin";
import Signup from "./components/pages/signin-signup/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />

        {/*private router */}
        <Route path="/new-admin" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
