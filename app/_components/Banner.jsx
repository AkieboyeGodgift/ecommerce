import React from 'react'
import Image from 'next/image'

import iphone17 from '/iphones/iphone17.png'
import ilogo from '/iphones/ilogo.png'

const Banner = () => {
  return (
    <div className="banner">
      <section className="banner-section">
        <div className="banner-content">
          <h1>iPhone 17</h1>
          <div className='banner-content-content'>
            <p>The Future is in your hand, Sleek and Potent</p>
            <button>View Catalog</button>
          </div>
        </div>
        <div>
          <Image className='banner-img' src={iphone17} />
        </div>
         <Image className='banner-bg' src={ilogo}/>
      </section>
    </div>
  )
}

export default Banner