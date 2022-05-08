import React from 'react'
import './Home.css'
import housewire from "../WebsiteMaterial/images/housewire.jpg"
import dishcable1 from "../WebsiteMaterial/images/dishcable1.jpg"
import industrialwires from "../WebsiteMaterial/images/industrialwires.jpg"
import fire from "../WebsiteMaterial/images/fire.png"
import electrician from "../WebsiteMaterial/images/electrician.jpg"
import longLasting from "../WebsiteMaterial/images/longLasting.png"
import meter from "../WebsiteMaterial/images/meter.png"
import Bottom from "./Bottom"
import img6 from "../WebsiteMaterial/images/img6.jpg"
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import northflex_line from '../WebsiteMaterial/images/northflex_line.jpeg'



export default function Home() {
	return (
		<>
			<Navbar />

			<div id="main_photo">
				
			</div>

			<div id="intro" >
					<h2 id="welcome">
						WELCOME TO NORTHFLEX
					</h2>
					<hr id="line_northflex" />

					<div id="intro_mid">
						<img src={electrician} id="electrician" alt="..." />
						<div>
							<p id="intro_para">

							We’re known for being one of the leading manufacturers of electrical cables and wires. We’re highly decorated and provide first-class products to our customers with excellent service to satisfy and co-operate with honesty and credibility. Our professional company has specialised in design thinking, innovation and research, and manufacturing products in terms of emerging trends and technologies. Our motive is to go the extra mile in terms of quality as it is the life of an enterprise.
							</p>
							<img src={northflex_line} style={{ width: "60%", height: "30%" }} alt="..."/>
						</div>

					</div>
				</div>

			<div id="wrapper">
				<div style={{ display: "flex" }}>
					<h1 id="wrapper_heading">Our Products</h1>
					<hr id="line_wrapper" />
				</div>
				<div className="wrapper">
					<Link to="/products" style={{ textDecoration: 'none' }}>
						<div className="card">
							<img src={housewire} alt="..." className='wires'/>
							<div className="info">
								<h1 className='heading_para'>Household Wires</h1>
								<h6 className='paragraph_products'> 
								For internal electrification and power supply to all electrical connected equipment
								</h6>
							</div>
						</div>
					</Link>
					<Link to="/products" style={{ textDecoration: 'none' }}>
						<div className="card">
							<img src={dishcable1} alt="..." />
							<div className="info">
								<h1 className='heading_para'>Commercial Wires</h1>
								<h6 className='paragraph_products'> 
								For internal & external electrification and power supply for a wide range of applications in Commercial
								</h6>
							</div>

						</div>
					</Link>
					<Link to="/products" style={{ textDecoration: 'none' }}>
						<div className="card">
							<img src={industrialwires} alt="..." />
							<div className="info">
								<h1 className='heading_para'>Industries &nbsp; Wires</h1>
								<h6 className='paragraph_products'> 
								For internal & external electrification and power supply for a wide range of applications in industries
								</h6>
							</div>

						</div>
					</Link>
				</div>
			</div>
{/* 
			<div id="elevate">
				<div id="elevate_box">
					<p>  ELEVATE YOUR HOME<br />
						WITH CUSTOMISED SOLUTIONS
					</p>
					<h4>GET EXPERT GUIDANCE</h4>
					<button id="elevate_button"> ASK NOW</button>
				</div>

			</div> */}


			<div style={{backgroundColor:'#f1f1f1'}}>
			<h1 id="quality">
				Quality . Guarantted
			</h1>
			<div id="advantages">
				<div className='cards'>
					<div className="imgBx">
						<img src={fire} id="img" alt="..." />
					</div>
					<div className="contents">
						<h2>fire</h2>
						<p>dsffffffffffffffffffff</p>
					</div>
				</div>

				<div className='cards'>
					<div className="imgBx">
						<img src={longLasting} id="img" alt="..." />
					</div>
					<div className="contents">
						<h2>long life</h2>
						<p>ewfweffwefwfefewfwewffe</p>
					</div>
				</div>

				<div className='cards'>
					<div className="imgBx">
						<img src={meter} id="img" alt="..." />
					</div>
					<div className="contents">
						<h2>meter</h2>
						<p>ejariewihkdefewuohfeneiods</p>
					</div>
				</div>
			</div>
			</div>
			<div>
				<img src={img6} id="different_use" alt="..." />
			</div>

			<Bottom />
		</>
	)
}