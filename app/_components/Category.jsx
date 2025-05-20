import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



const Category = () => {
  return (
    <div>
      <h2 className='category-section-name'>Popular</h2>
    <section className="category-section">

      <div className="card">
        <div className="card-conent">
          <h2>iPhone 7 Plus</h2>
          <Link href="/" className='card-linke'>View Details</Link>
          <Image className='card-img' src='/iphones/iphone7.png' />
        </div>
      </div>

      <div className="card">
        <div className="card-conent">
          <h2>iPhone XS Max</h2>
          <Link href="/" className='card-linke'>View Details</Link>
          <Image className='card-img' src='/iphones/iphonexs.png' />
        </div>
      </div>

      <div className="card">
        <div className="card-conent">
          <h2>iPhone 15 pro max</h2>
          <Link href="/" className='card-linke'>View Details</Link>
          <Image src='/iphones/iphone15promax.png' className='card-img' />
        </div>
      </div>

      <div className="card">
        <div className="card-conent">
          <h2>iPhone 15 pro</h2>
          <Link href="/" className='card-linke'>View Details</Link>
          <Image src='/iphones/iphone16promax.png' className='card-img' />
        </div>
      </div>

      <div className="card">
        <div className="card-conent">
          <h2>iPhone 16</h2>
          <Link href="/" className='card-linke'>View Details</Link>
          <Image src='/iphones/iphone16.png' className='card-img' />
        </div>
      </div>

      <div className="card">
        <div className="card-conent">
          <h2>iPhone 11</h2>
          <Link href="/" className='card-linke'>View Details</Link>
          <Image src='/iphones/iphone11.png'  className='card-img'/>
        </div>
      </div>
    </section>
    </div>
    
  )
}

export default Category