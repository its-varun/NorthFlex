import React from 'react'
import './Home.css'
import mainPhoto from "../WebsiteMaterial/images/img1.png"
import housewire from "../WebsiteMaterial/images/housewire.jpg"
import dishcable1 from "../WebsiteMaterial/images/dishcable1.jpg"
import industrialwires from "../WebsiteMaterial/images/industrialwires.jpg"
import electrician from "../WebsiteMaterial/images/electrician.png"
import Bottom from "./Bottom"
import img6 from "../WebsiteMaterial/images/img6.jpg"
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import northflex_line from '../WebsiteMaterial/images/northflex_line.jpeg'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';



export default function Home() {
	return (
		<>
			<Navbar />

			<div >
				<img src={mainPhoto} id="main_photo" alt="..."/>
			</div>

			<div id="intro" >
					<h2 id="welcome">
						WELCOME TO NORTHFLEX
					</h2>
					<hr id="line_northflex" />

					<div id="intro_mid">
						<Fade left>
							<img src={electrician} id="electrician" alt="..." />
						</Fade>
						<div>
							<Fade right>
								<p id="intro_para">

								We’re known for being one of the leading manufacturers of electrical cables and wires. We’re highly decorated and provide first-class products to our customers with excellent service to satisfy and co-operate with honesty and credibility. Our professional company has specialised in design thinking, innovation and research, and manufacturing products in terms of emerging trends and technologies. Our motive is to go the extra mile in terms of quality as it is the life of an enterprise.
								</p>
							</Fade>
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
					<Zoom>
						<Link to="/products" style={{ textDecoration: 'none' }}>
							<div className="card">
								<img src={housewire} alt="..." className='wires'/>
								<div className="info1">
								<Fade bottom>
									<h1 className='heading_para'>House &nbsp; &nbsp; &nbsp; &nbsp; Wires</h1>
									<h6 className='paragraph_products'> 
									For internal electrification and power supply to all electrical connected equipment
									</h6>
								</Fade>
								</div>
							</div>
						</Link>
					</Zoom>
					<Zoom>
					<Link to="/products" style={{ textDecoration: 'none' }}>
						<div className="card">
							<img src={dishcable1} alt="..." />
							<div className="info1">
							<Fade bottom>
								<h1 className='heading_para'>Agriculture Wires</h1>
								<h6 className='paragraph_products'> 
								For internal & external electrification and power supply for a wide range of applications in Agriculture
								</h6>
							</Fade>
							</div>

						</div>
					</Link>
					</Zoom>
					<Zoom>
						<Link to="/products" style={{ textDecoration: 'none' }}>
							<div className="card">
								<img src={industrialwires} alt="..." />
								<div className="info1">
								<Fade bottom>
									<h1 className='heading_para'>Industrial &nbsp; Wires</h1>
									<h6 className='paragraph_products'> 
									For internal & external electrification and power supply for a wide range of applications in industries
									</h6>
								</Fade>
								</div>

							</div>
						</Link>
					</Zoom>
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


			{/* <div style={{backgroundColor:'#f1f1f1'}}> */}
			{/* <div id="advantages">
				<div className='cards'>
					<div className="imgBx">
						<img src={fire} id="img" alt="..." />
					</div>
					<div className="contents">
						<h2>fire</h2>
						<p>dsffffffffffffffffffff</p>
					</div>
				</div> */}

				{/* <div className='cards'>
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
			</div> */}
			<div id="container_home">
				<Slide right>
				<div className='content'>
					<h2 style={{"marginBottom":"25px"}}>Why choose NorthFlex Cables?</h2>
					<div className="content_in">
						<i className="fa-solid fa-clipboard-check" id="icon_clipboard"></i>
						<p className="content_points">
						Customer service.
						</p>
					</div>
					<div className="content_in">
						<i className="fa-solid fa-clipboard-check" id="icon_clipboard"></i>
						<p className="content_points">
						High performance cables.
						</p>
					</div>
					<div className="content_in">
						<i className="fa-solid fa-clipboard-check" id="icon_clipboard"></i>
						<p className="content_points">
						Wide range of cables.
						</p>
					</div>
					<div className="content_in">
						<i className="fa-solid fa-clipboard-check" id="icon_clipboard"></i>
						<p className="content_points">
						Highly flexible cables.
						</p>
					</div>
					<div className="content_in">
						<i className="fa-solid fa-clipboard-check" id="icon_clipboard"></i>
						<p className="content_points">
						Cables engineered for greater durability and<br/>reliability.
						</p>
					</div>
					<div className="content_in">
						<i className="fa-solid fa-clipboard-check" id="icon_clipboard"></i>
						<p className="content_points">
						Cables designed to perform in all kinds of<br/>installations.
						</p>
					</div>
				</div>
				</Slide>
			</div>
			<h1 id="quality">
			     Quality . Guarantted
			</h1>

			<div>
				<Fade>
					<img src={img6} id="different_use" alt="..." />
				</Fade>
			</div>

			<Bottom />
		</>
	)
}