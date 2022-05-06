import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import Products from "./components/Products";
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
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
