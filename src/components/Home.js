import React from 'react'
import './Home.css'
import Northflex_logo from "../WebsiteMaterial/images/Northflex_logo.jpg"
import img2 from "../WebsiteMaterial/images/img2.jpg"
import img3 from "../WebsiteMaterial/images/img3.jpg"
import img4 from "../WebsiteMaterial/images/img4.jpg"




export default function Home() {
  return (
    <>
    <nav id="nav" className="navbar navbar-expand-lg navbar-light">
	  <div className="container-fluid" >
	    <img src={Northflex_logo} id="North_logo" href="#" />
	    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	      <span className="navbar-toggler-icon"></span>
	    </button>
	    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
	      <div className="navbar-nav">
	        <a className="nav_link" href="#">HOME</a>
	        <a className="nav_link" href="#">ABOUT US</a>
	        <a className="nav_link" href="#">OUR PRODUCTS</a>
	        <a className="nav_link" href="#">SUPPORT</a>
	        <a className="nav_link" href="#">CONTACT US</a>
	      </div>
	    </div>
	  </div>
	</nav>
	
	<div id="main_photo">
		<input type="text" id="search_main" placeholder="Search " />
	</div>
	<div id="wrapper">
		<div style={{display:"flex"}}>
			<h1 id="wrapper_heading">Our Products</h1>
			<hr id="line_wrapper" />
		</div>
		<div className="wrapper">
			<div className="card">
				<img src={img2} />
				<div className="info">
					<h1>Flexible Wire</h1>
				</div>

			</div> 

			<div className="card">
				<img src={img3}/>
				<div className="info">
					<h1>Flexible Wire</h1>
				</div>

			</div> 

			<div className="card">
				<img src={img4} />
				<div className="info">
					<h1>Flexible Wire</h1>
				</div>

			</div> 
		</div>
	</div>
	<div id="elevate">
		<div id="elevate_box">
			<p>  ELEVATE YOUR HOME<br/>
				WITH CUSTOMISED SOLUTIONS
			</p>
			<h4>GET EXPERT GUIDANCE</h4>
			<button id="elevate_button"> ASK NOW</button>
		</div>
		
	</div>
    </>
  )
}
