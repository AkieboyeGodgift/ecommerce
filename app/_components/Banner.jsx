import React from 'react'
import Image from 'next/image'

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
          <Image className='banner-img' src='/iphones/iphone17.png' />
        </div>
         <Image className='banner-bg' src='/iphones/ilogo.png'/>
      </section>
    </div>
  )
}

export default Banner