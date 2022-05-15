import React, {useState} from 'react'
import Northflex_logo from "../WebsiteMaterial/images/Northflex_logo.jpg"

import { Link } from 'react-router-dom'
export default function Navbar() {
	const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem('token'))
	const handleLogout = ()=>{
		setIsLoggedin('');
		localStorage.removeItem('token');
	}
  return (
    <nav id="nav" className="navbar navbar-expand-lg navbar-light">
	  <div className="container-fluid" >
	    <img src={Northflex_logo} id="North_logo" alt="..." />
	    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	      <span className="navbar-toggler-icon"></span>
	    </button>
	    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
	      <div className="navbar-nav">
	        <a className="nav_link" href="/">HOME</a>
	        <a className="nav_link" href="/about">ABOUT US</a>
	        <a className="nav_link" href="/products">OUR PRODUCTS</a>
	        {/* <a className="nav_link" href="/contactus">SUPPORT</a> */}
	        <a className="nav_link" href="/contactus">CONTACT US</a>
			{/* <a href="/contactus">About2</a> */}
	        {isLoggedin?<Link onClick={handleLogout} className="nav_link" to="#">LOGOUT</Link>:<Link className="nav_link" to="/login">LOGIN</Link>}
	      </div>
	    </div>
	  </div>
	</nav>
  )
}
