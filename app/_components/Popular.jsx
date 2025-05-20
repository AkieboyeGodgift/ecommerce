import React from 'react'
import Image from 'next/image';

import iphonexs from '/iphones/iphonexs.png';
import iphone16promax from '/iphones/iphone16promax.png'
import iphone15promax from '/iphones/iphone15promax.png'

const Popular = () => {
  return (
    <div className="popular">
      <h2>Most Popular</h2>
      <section className='popular-section'>
        <div className="popular-card-1">
          <h3>Iphone XS Max</h3>
          <Image src={iphonexs}/>
          <h4>$199</h4>
        </div>

        <div className="popular-card-1">
          <h3>Iphone 16 Pro Max</h3>
          <Image src={iphone16promax}/>
          <h4>$699</h4>
        </div>

        <div className="popular-card-1">
          <h3>Iphone 15 pro max</h3>
          <Image src={iphone15promax}/>
          <h4>$799</h4>
        </div>
      </section>
    </div>
  )
}

export default Popular