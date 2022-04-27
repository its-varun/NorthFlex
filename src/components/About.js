import React, { useState } from 'react'

import './About.css'
import Director1 from '../WebsiteMaterial/images/Director1.jpg'
import Director2 from '../WebsiteMaterial/images/Director2.jpg'
import Late from '../WebsiteMaterial/images/late.webp'
import Bottom from './Bottom'
import { useInView } from 'react-intersection-observer';


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
      <div className='HeroSection'>
        <div id="heroImage">
          <div className='heroContent'>
            <h1>About Us</h1>
            {/* <p>NorthFlex India Limited is a Fast Moving Electrical Goods (FMEG) Company with an extremely strong global presence, thanks to our philosophy of Make in India, extensive distribution network and world class quality.</p> */}
          </div>
        </div>
      </div>

      <div className='About'>
        <div className='aboutContent'>
          <h1>
            What we do
          </h1>
          <p>
            NorthFlex Industries was started in XXXX, in India. Over XX years later, we have grown into a diversified million dollar company, and expanded to over XX states as a highly trusted manufacturer and supplier of conductors, a wide variety of cables, speciality oils, polymers and lubricants. At NorthFlex, we have been able to excel at what we do because of who we are: relentless innovators who are constantly pushing ourselves to discover, perfect and deliver tomorrow solutions today.
          </p>
        </div>

        <div className='aboutContent'>
          <h1>Everything we stand for</h1>
          <p>

          </p>
          <p>
            Our single-minded focus on innovation that solves real problems takes on several forms. Our focus on consistently optimising efficiency in our manufacturing facilities to ensure better costs for our clients. Our world-class manufacturing facilities (ISO 9001 and ISO 14001 accredited) and testing centres. Our emphasis on finding solutions that align with our core values of integrity, honesty and accountability to every stakeholder: our customers, our employees and our shareholders.
          </p>
        </div>
      </div>

      <div className="Directors">
        <div className='director_1'>
          <img src={Director1} alt="..." height="450px" />
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
          <img src={Director2} alt="..." height="450px" />
        </div>
      </div>
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
            </div>
          </div>
          <div className="cardContainer">
            <div className='cardDivision'>
              <p>{products}+</p>
              <p>Fine Products</p>
            </div>
          </div>
          <div className="cardContainer">
            <div className='cardDivision'>
              <p>{yearsOld}+</p>
              <p>Years in the market</p>
            </div>
          </div>
        </div>
      </div>

      <div className='lateSection'>
        <img src={Late} alt='' />
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

      <Bottom />
    </>
  )
}
