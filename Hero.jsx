import React from 'react'

function Hero() {
  return (
    <section style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4rem 2rem'}}>
      <div style={{maxWidth: '50%'}}>
        <h1 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem'}}>
          Title Copy Goes Here Be Awesome
        </h1>
        <p style={{marginBottom: '2rem', color: '#555'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <button style={{backgroundColor: '#000', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '4px', fontWeight: '600'}}>
          GET STARTED
        </button>
      </div>
      <div style={{maxWidth: '45%'}}>
        <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80" alt="Smiling man" style={{borderRadius: '8px'}} />
      </div>
    </section>
  )
}

export default Hero
