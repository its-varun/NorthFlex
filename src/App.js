import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Dealer from "./components/Dealer"
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
          <Route path="dealer" element={<Dealer/>} />
          <Route path="contactus" element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
