import React, { useState } from 'react'

import './About.css'
// import Director1 from '../WebsiteMaterial/images/Director1.jpg'
// import Director2 from '../WebsiteMaterial/images/Director2.jpg'
import owner from '../WebsiteMaterial/images/owner.jpeg'
import Bottom from './Bottom'
import { useInView } from 'react-intersection-observer';
import Navbar from './Navbar'
import suntex from '../WebsiteMaterial/images/suntex_industry.png'
import Bounce from 'react-reveal/Bounce';
// import Flip from 'react-reveal/Flip';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';



export default function About(props) {

  const [dealers, setDealers] = useState(0);
  const [products, setProducts] = useState(0);
  const [yearsOld, setYearsOld] = useState(0)

  function start() {
    setTimeout(() => {
      if (dealers < 1000) {
        setDealers(dealers + 1000 / 100);
        clearTimeout();
      }
    }, 10);

    setTimeout(() => {
      if (products < 30000) {
        setProducts(products + 30000 / 100);
        clearTimeout();
      }
    }, 10);

    setTimeout(() => {
      if (yearsOld < 30) {
        setYearsOld(yearsOld + 1);
        clearTimeout();
      }
    }, 50);

    // setTimeout(() => {
    //   setYearsOld(1);
    // }, 5000);

  }
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <>
    <Navbar/>
      <div className='HeroSection'>
        <div id="heroImage">
          <div className='heroContent'>
            <Pulse>
            <h1>About Us</h1>
            </Pulse>
          </div>
        </div>
      </div>

      <div className='About'>
        <div>
          <div className='aboutContent'>
            <h1>
              What we do ?
            </h1>
            <p className="about_paraa">
            <Bounce>
              SCL Electric India Private Limited was started as Suntex Cable Industries in Ludhiana, Punjab. Over 31 years later, we have expanded to all over Punjab as a highly trusted manufacturer and supplier of conductors, a wide variety of Cables and Conduit PVC Pipes. At NorthFlex, we have been able to excel at what we do because of who we are: relentless innovators who are constantly pushing ourselves to discover, perfect and deliver tomorrow solutions today.
            </Bounce>
            </p>
          </div>

          <div className='aboutContent'>
            <h1>Everything we stand for:</h1>
            <p>

            </p>
            <p className='about_paraa'>
              <Bounce>
              Our single-minded focus on innovation that solves real problems takes on several forms. Our focus on consistently optimising efficiency in our manufacturing facilities to ensure better costs for our Customers. Our world-class manufacturing facilities (ISO 9001 and ISO 14001 accredited) and testing Labs. Our emphasis on finding solutions that align with our core values of integrity, honesty and accountability to every customers.
              </Bounce>
            </p>
          </div>
        </div>
        <Bounce right>
        <img src={suntex} id="suntex" alt="..."/>
        </Bounce>
      </div>

      {/* <div className="Directors">
        <div className='director_1'>
          <Bounce left>
            <img src={Director1} alt="..." height="450px" />
          </Bounce>
          <div className='aboutDirector'>
            <p>Co-Founder / Chief Executive Officer</p>
            <p>Florian Otto, MD, PhD</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero vel aperiam, eos dolorum sint facilis blanditiis rerum, cum dignissimos adipisci exercitationem esse. Maiores, repellat aut reprehenderit rerum nihil voluptatibus incidunt iusto ut repellendus laborum, rem quod ipsam veritatis possimus nulla quo sint, qui deleniti assumenda. Aut praesentium assumenda debitis!
            </p>
          </div>
        </div>
        <div className='director_2'>
          <div className='aboutDirector'>
            <p>Co-Founder / Chief Executive Officer</p>
            <p>Florian Otto, MD, PhD</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, reiciendis aspernatur. Commodi voluptatibus saepe eos facere aliquid quidem, repellat eius quod, sunt officiis reiciendis magnam in aliquam optio blanditiis nemo delectus? Iusto quae fuga soluta illum quod, amet voluptate a.</p>
          </div>
          <Bounce right>
          <img src={Director2} alt="..." height="450px" />
          </Bounce>
        </div>
      </div> */}
      {/* dealears joined, products, 30+ */}
      <div className="indefatigableTeam">

        <h1 ref={ref}>Join the Indefatigable Team </h1>

        <p>Check out our awesome perks</p>
        <div className='indefatigableTeamContainer'>
          <div className="cardContainer">
          {inView ? start() : ''}
            <div className='cardDivision'>
              <p>{dealers}+</p>
              <p>Trusted Dealers</p>
              <i className="fa-solid fa-handshake"></i>
            </div>
          </div>
          <div className="cardContainer">
            <div className='cardDivision'>
              <p>{products}+</p>
              <p>Fine Products</p>
              <i className="fa-solid fa-circle-nodes"></i>
              <i className="fa-solid fa-circle-nodes rotate"></i>
            </div>
          </div>
          <div className="cardContainer">
            <div className='cardDivision'>
              <p>{yearsOld}+</p>
              <p>Years in the market</p>
              <i className="fa-solid fa-shop"></i>
            </div>
          </div>
        </div>
      </div>
      <Fade>
        <div className='lateSection'>
          <img src={owner} alt='' id="owner"/>
          <div>
            <p>
              Late Mr. Lorem<br />
              Founder
            </p>
            <p>
              Mr. Lorem was the founder of this company. whatever we have achieved in this journey, credit goes to him. If he was with us, we would have touched more heights.
            </p>
          </div>
        </div>
      </Fade>
      <Bottom />
    </>
  )
}