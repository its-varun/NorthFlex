import React from 'react'
import './Home.css'
import Northflex_logo from "../WebsiteMaterial/images/Northflex_logo.jpg"
import img2 from "../WebsiteMaterial/images/img2.jpg"
import img3 from "../WebsiteMaterial/images/img3.jpg"
import img4 from "../WebsiteMaterial/images/img4.jpg"
import fire from "../WebsiteMaterial/images/fire.jpg"
import electrician from "../WebsiteMaterial/images/electrician.jpg"
import longLasting from "../WebsiteMaterial/images/longLasting.png"
import meter from "../WebsiteMaterial/images/meter.jpg"
import Bottom from "./Bottom";



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

	<div id="intro" >
		<h2 id="welcome">
			WELCOME TO NORTHFLEX
		</h2>
		<hr id="line_northflex" />

		<div id="intro_mid">
			<img src={electrician} id="electrician" />
			<p>
				
We introduce ourselves as leading manufacturer of electrical goods under brand name of NIROL. Garg Industries established in the year 2000, is a professional company having specialized in designing, manufacturing and marketing of electrical wires, cables, main switch gear, change over switches, Kit-Kat fuse, domestic and similar purpose switches and socket outlets and heating elements. Our mission is to go to extra mile in satisfying our customers has been instrumental in propelling the company to a premiership position in the niche market of QUALITY WIRES, CABLES & ELECTRIC ASSESSORIES for the domestic and industrial use.   Quality is the life of enterprise! Garg Industries always provide first class products to its sufficient customers and provide excellent service to co-operative clients with honestly and eco friendly nature.
			</p>

		</div>
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

	<h1 id="quality">
		Quality . Guarantted
	</h1>
	<div id="advantages">
		<div className='cards'>
			<div className="imgBx">
				<img src={fire} id="img"/>
			</div>
			<div className="contents">
				<h2>fire</h2>
				<p>dsffffffffffffffffffff</p>
			</div>
		</div>

		<div className='cards'>
			<div className="imgBx">
				<img src={longLasting} id="img"/>
			</div>
			<div className="contents">
				<h2>long life</h2>
				<p>ewfweffwefwfefewfwewffe</p>
			</div>
		</div>

		<div className='cards'>
			<div className="imgBx">
				<img src={meter} id="img"/>
			</div>
			<div className="contents">
				<h2>meter</h2>
				<p>ejariewihkdefewuohfeneiods</p>
			</div>
		</div>
	</div>

	<Bottom/>
    </>
  )
}
