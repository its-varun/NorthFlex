import React from 'react'
import './Bottom.css'
import footer from "../WebsiteMaterial/images/footer.png"
import { Link } from 'react-router-dom'

export default function Bottom() {
  return (
    <>
        <div id="footer">
            <div id="first_footer">
                <h1 id="help">We're here to help you</h1>
                <Link to="/contactus">
                    <button className="button">
                        Contact Us
                    </button>
                </Link>
                <Link to="/dealer">
                    <button className='button' style={{marginLeft:"20px"}}>
                        Dealership  Inquiry
                    </button>
                </Link>
                <h3 className='info' style={{marginTop:"35px"}}>
                    1234-567-9000
                </h3>
                <h3 className='info'>
                    northflexxxxx@gmail.com
                </h3>
                <h3 className='info'>
                    https://nothflex.in/
                </h3>
            </div>
            <div id="second_footer">
                <h1 id="main">NorthFlex</h1>
                <h3 className='info'>
                    Aluminium Cables
                </h3>
                <h3 className='info'>
                    CCTV Cables
                </h3>
                <h3 className='info'>
                    Co-Axial Cables
                </h3>
                <h3 className='info'>
                    Flexible Wires
                </h3>
                <h3 className='info'>
                    Multistrand Wires
                </h3>
                <div id="contact_icons">
                    <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjlgeDorbzwAhVPDCsKHVF8BJIYABAAGgJzZg&ae=2&ohost=www.google.com&cid=CAESQOD2jimxu7s00ezwY1HM_qBD0C7yH-6Ezk32Mn55FpiS8HLHplRfnSTcs-DkW3zfUdKXhPzSWT5JIjTh7TRHTPY&sig=AOD64_2V5kLYi7mDRCGZIpV5Ww7Q2ntx7Q&q&adurl&ved=2ahUKEwidmtjorbzwAhW0heYKHZaRCQEQ0Qx6BAgGEAE" class="link_footer"><i  id="contact_icon" class="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/" class="link_footer"><i  id="contact_icon" class="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/" class="link_footer"><i  id="contact_icon" class="fab fa-linkedin"></i></a>
                    <a href="https://www.apple.com/in/" class="link_footer"><i  id="contact_icon" class="fab fa-apple"></i></a>
                    <a href="https://twitter.com/?lang=en" class="link_footer"><i  id="contact_icon" class="fab fa-twitter"></i></a>
                </div>
            </div>

            <div id="third_footer">
                <img src={footer} id="footer_image" alt="..."/>
            
            </div>

        </div>    
    
    </>
  )
}
