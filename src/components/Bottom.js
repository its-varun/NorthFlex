import React from 'react'
import './Bottom.css'
import footer from "../WebsiteMaterial/images/footer.png"
import { Link } from 'react-router-dom'
import bottom from "../WebsiteMaterial/images/bottom.png"

export default function Bottom() {
  return (
    <>
        <div id="footer">
            <div id="first_footer">
                <h1 id="help">We're here to help you</h1>
                {/* <Link to="/contactus">
                    <button className="button">
                        Contact Us
                    </button>
                </Link> */}
                <Link to="/contactus">
                    <button className='button' >
                        Dealership  Inquiry
                    </button>
                </Link>
                <a href="tel:+91 7814412345" style={{textDecoration:"none"}}>
                <h3 className='info' style={{marginTop:"35px",textDecoration:"none"}}>
                    +91 7814412345
                </h3>
                </a>
                <a href="mailto:suntexcableind@gmail.com"  style={{textDecoration:"none"}}>
                    <h3 className='info'  style={{textDecoration:"none"}}>
                        suntexcableind@gmail.com
                    </h3>
                </a>
                <a href="/" style={{textDecoration:"none"}}>
                    <h3 className='info' style={{textDecoration:"none"}}>
                        https://nothflex.in/
                    </h3>
                </a>
                <div style={{marginTop:"53px"}}>
                    <i className="fa-brands fa-whatsapp" id="whatsapp"></i>
                    <a href="https://wa.me/7876695045?text=Hello want to know something" className='whatsapp'>
                        Connect with us on whatsapp 
                    </a>
                </div>
            </div>
            <div id="second_footer">
                <h1 id="main">NorthFlex</h1>
                <Link to="/products" style={{"textDecoration":"none"}}>
                <h3 className='info'>
                    Aluminium Cables
                </h3>
                </Link>
                <Link to="/products" style={{"textDecoration":"none"}}>
                <h3 className='info'>
                    Submersible Cables
                </h3>
                </Link>
                <Link to="/products" style={{"textDecoration":"none"}}>
                <span className='info'>
                    Co-Axial Cables
                </span>
                </Link>
                <Link to="/products" style={{"textDecoration":"none"}}>
                <h3 className='info'>
                    Copper Wires
                </h3>
                </Link>
                <Link to="/products" style={{"textDecoration":"none"}}>
                <h3 className='info'>
                    PVC Pipes
                </h3>
                </Link>
                <div id="contact_icons">
                    <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjlgeDorbzwAhVPDCsKHVF8BJIYABAAGgJzZg&ae=2&ohost=www.google.com&cid=CAESQOD2jimxu7s00ezwY1HM_qBD0C7yH-6Ezk32Mn55FpiS8HLHplRfnSTcs-DkW3zfUdKXhPzSWT5JIjTh7TRHTPY&sig=AOD64_2V5kLYi7mDRCGZIpV5Ww7Q2ntx7Q&q&adurl&ved=2ahUKEwidmtjorbzwAhW0heYKHZaRCQEQ0Qx6BAgGEAE" className="link_footer"><i  id="contact_icon" className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/" className="link_footer"><i  id="contact_icon" className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/" className="link_footer"><i  id="contact_icon" className="fab fa-linkedin"></i></a>
                    {/* <a href="https://www.apple.com/in/" className="link_footer"><i  id="contact_icon" className="fab fa-apple"></i></a>
                    <a href="https://twitter.com/?lang=en" className="link_footer"><i  id="contact_icon" className="fab fa-twitter"></i></a> */}
                </div>
            </div>

            <div id="third_footer">
                <img src={footer} id="footer_image" alt="..."/>
            
            </div>

        </div>    
        <img src={bottom} id="bottom" height="100px" alt="..."/>
    
    </>
  )
}