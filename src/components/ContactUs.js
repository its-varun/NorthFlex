import React from 'react'
import './ContactUs.css'
import Navbar from './Navbar'
import contactUsImage from '../WebsiteMaterial/images/ContactUs.jpg'

export default function ContactUs () {
    return (
        <div>
            <Navbar />
            <div className='contactUs'>
                <img className="contactUsImage" src={contactUsImage} alt="..." />
                <div>
                    <input placeholder='Name' />
                    <input placeholder='Company' />
                </div>
                <div>
                    <input placeholder='Email' />
                    <input placeholder='Phone Number' />
                </div>
                <div>
                    <input placeholder='Country' />
                    <input placeholder='State/Province' />
                </div>
                <div>
                    <input placeholder='Business' />
                    <input placeholder='Product' />
                </div>
                <div>
                    <textarea placeholder='Enquiry' name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button className="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}
