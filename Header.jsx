import React from 'react'

function Header() {
  return (
    <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid #ddd'}}>
      <div style={{fontWeight: 'bold', fontSize: '1.25rem'}}>
        Company logo
      </div>
      <nav style={{display: 'flex', gap: '1.5rem', alignItems: 'center'}}>
        <a href="#" style={{fontWeight: '500'}}>Home</a>
        <a href="#" style={{fontWeight: '500'}}>Features</a>
        <a href="#" style={{fontWeight: '500'}}>Pricing</a>
        <button style={{backgroundColor: '#000', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: '600'}}>
          GET STARTED
        </button>
      </nav>
    </header>
  )
}

export default Header
