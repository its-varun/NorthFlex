import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import Products from "./components/Products";
import EnterOtp from "./components/EnterOtp";
import SendOtp from "./components/ForgetPassword/SendOtp";
import ResetPasswordOtp from "./components/ForgetPassword/ResetPasswordOtp";
import SetPassword from "./components/ForgetPassword/SetPassword";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contactus" element={<ContactUs/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="enterotp" element={<EnterOtp/>} />
          <Route exact path="sendotp" element={<SendOtp/>} />
          <Route exact path="/resetpasswordotp" element={<ResetPasswordOtp/>} />
          <Route exact path="/setpassword" element={<SetPassword/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
