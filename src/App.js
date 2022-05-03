import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      {/* <Home/> */}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<ContactUs/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
