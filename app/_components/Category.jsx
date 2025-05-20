import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Images

import iphone7 from '/iphones/iphone7.png';
import iphonexs from '/iphones/iphonexs.png';
import iphone15promax from '/iphones/iphone15promax.png';
import iphone16promax from '/iphones/iphone16promax.png';
import iphone16 from '/iphones/iphone16.png';
import iphone11 from '/iphones/iphone11.png';


const Category = () => {
  return (
    <div>
      <h2 className='category-section-name'>Popular</h2>
    <section className="category-section">

      <div className="card">
        <div className="card-conent">
          <h2>iPhone 7 Plus</h2>
          <Link href="/" className='card-linke'>View Details</Link>
          <Image className='card-img' src={iphone7} />
        </div>
      </div>

      <div className="card">
        <div className="card-conent">
          <h2>iPhone XS Max</h2>
          <Link href="/" className='card-linke'>View Details</Link>
          <Image className='card-img' src={iphonexs} />
        </div>
      </div>

      <div className="card">
        <div className="card-conent">
          <h2>iPhone 15 pro max</h2>
          <Link href="/" className='card-linke'>View Details</Link>
          <Image src={iphone15promax} className='card-img' />
        </div>
      </div>

      <div className="card">
        <div className="card-conent">
          <h2>iPhone 15 pro</h2>
          <Link href="/" className='card-linke'>View Details</Link>
          <Image src={iphone16promax} className='card-img' />
        </div>
      </div>

      <div className="card">
        <div className="card-conent">
          <h2>iPhone 16</h2>
          <Link href="/" className='card-linke'>View Details</Link>
          <Image src={iphone16} className='card-img' />
        </div>
      </div>

      <div className="card">
        <div className="card-conent">
          <h2>iPhone 11</h2>
          <Link href="/" className='card-linke'>View Details</Link>
          <Image src={iphone11}  className='card-img'/>
        </div>
      </div>
    </section>
    </div>
    
  )
}

export default Category