import React from 'react'

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h1>Exclusive Assist</h1>
        <p>Get Exclisive support from our team <br /> we will assist and guide you through <br /> any complicated process just send us <br /> an email and we will respond <br /> immediately 😉.</p>
      </div>
      <div className="contact">
        <input type="text" className='emailinput' placeholder='Your Email' />
        <button>Send Email</button>
      </div>

      <div className="background-text">
        <div className='precision'>
          <h1>Precision.</h1>
        </div>

        <div className='elegance'>
          <h1>Elegance.</h1>
        </div>

        <div className='support'>
          <h1>Support.</h1>
        </div>
      </div>
      
    </section>
  )
}

export default Contact