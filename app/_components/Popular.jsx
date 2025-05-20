import React from 'react'
import Image from 'next/image';


const Popular = () => {
  return (
    <div className="popular">
      <h2>Most Popular</h2>
      <section className='popular-section'>
        <div className="popular-card-1">
          <h3>Iphone XS Max</h3>
          <Image src='/iphones/iphonexs.png'/>
          <h4>$199</h4>
        </div>

        <div className="popular-card-1">
          <h3>Iphone 16 Pro Max</h3>
          <Image src='/iphones/iphone16promax.png'/>
          <h4>$699</h4>
        </div>

        <div className="popular-card-1">
          <h3>Iphone 15 pro max</h3>
          <Image src='/iphones/iphone15promax.png'/>
          <h4>$799</h4>
        </div>
      </section>
    </div>
  )
}

export default Popular