import React from 'react';
import Image from 'next/image';

import aboutimg from '../../public/iphones/iphone-img-removebg-preview.png'
import ilogo from '../../public/iphones/ilogo.png'

const About = () => {
  return (
    <div className="about">
        <h1>About Us</h1>
      <section className="about-section">
        
        <div className="about-content">
          <h2>Experience Purity in Tech</h2>
          <p>
            At iPure, we redefine innovation through simplicity and precision. Our technology solutions are built to enhance lives, drive businesses forward, and maintain the purity of seamless performance.
          </p>
          <h3>Experience iPure</h3>
        </div>
        <div className="about-image">
          <Image src={aboutimg} alt="About iPure" />
        </div>
        <Image src={ilogo} className="about-background" alt="Background logo" />
      </section>
    </div>

  )
}

export default About