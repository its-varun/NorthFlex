import React from 'react'
import './About.css'
import Director1 from '../WebsiteMaterial/images/Director1.jpg'
import Director2 from '../WebsiteMaterial/images/Director2.jpg'

export default function About() {
  return (
    <>
      <div className='HeroSection'>

        <div id="heroImage">
          <div className='heroContent'>
            <h1>NorthFlex</h1>
            <p>NorthFlex India Limited is a Fast Moving Electrical Goods (FMEG) Company with an extremely strong global presence, thanks to our philosophy of Make in India, extensive distribution network and world class quality.</p>
          </div>
        </div>

        <div className='About'>

          <div className='aboutContent'>
            <h1>
              NorthFlex's vision
            </h1>

            <p>
              How we do what we do
            </p>
            <p>
              NorthFlex Industries was started in XXXX, in India. Over XX years later, we have grown into a diversified million dollar company, and expanded to over XX states as a highly trusted manufacturer and supplier of conductors, a wide variety of cables, speciality oils, polymers and lubricants. At NorthFlex, we have been able to excel at what we do because of who we are: relentless innovators who are constantly pushing ourselves to discover, perfect and deliver tomorrow solutions today.
            </p>
          </div>

          <div className='aboutContent'>
            <h1 style={{display:"none"}}>$</h1>
            <p>
              Everything we stand for
            </p>
            <p>
              Our single-minded focus on innovation that solves real problems takes on several forms. Our focus on consistently optimising efficiency in our manufacturing facilities to ensure better costs for our clients. Our world-class manufacturing facilities (ISO 9001 and ISO 14001 accredited) and testing centres. Our emphasis on finding solutions that align with our core values of integrity, honesty and accountability to every stakeholder: our customers, our employees and our shareholders.
            </p>
          </div>

        </div>

        <div className="Directors">
          <div className='director_1'>
            <img src={Director1} alt="..." height="400px"/>
            <p className='aboutDirector'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero vel aperiam, eos dolorum sint facilis blanditiis rerum, cum dignissimos adipisci exercitationem esse. Maiores, repellat aut reprehenderit rerum nihil voluptatibus incidunt iusto ut repellendus laborum, rem quod ipsam veritatis possimus nulla quo sint, qui deleniti assumenda. Aut praesentium assumenda debitis!
            </p>
          </div>
          <div className='director_2'>
            <img src={Director2} alt="..."  height="450px"/>
            <p className='aboutDirector'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, reiciendis aspernatur. Commodi voluptatibus saepe eos facere aliquid quidem, repellat eius quod, sunt officiis reiciendis magnam in aliquam optio blanditiis nemo delectus? Iusto quae fuga soluta illum quod, amet voluptate a.</p>
          </div>
        </div>

      </div>
    </>
  )
}
