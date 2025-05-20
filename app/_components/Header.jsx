import { Heart, Search, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';


const Header = () => {
  return (
    <div className='header-container'>
      <nav className='navbar'>
        <h2>iPure</h2>
        <div className="navItems">
          <ul> 
            <li className='homeli'>Home</li>
            <li>Catalog</li>
            <li>Category</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="buttons">
          <button className='button'><Search /></button>
          <button className='button'><Heart /></button>
          <button className='button'><ShoppingCart /></button>
        </div>
      </nav>
      <div className='hero-section'>
         <h1 className='ipure'>iPure</h1>
         <Image
          src='/hero-bg.png'
          className='hero-bg'
         />
         <div className='hero-down'>
          <div className='hero-prices'>
            <h2 className='hero-price'>$899</h2>
            <h2 className='hero-price-2'><s>$999</s></h2>
          </div>
          <button>Buy Now</button>
         </div>
      </div>
    </div>
  )
}

export default Header