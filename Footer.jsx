import React from 'react'

function Footer() {
  return (
    <footer style={{backgroundColor: '#f5f5f5', padding: '2rem', marginTop: '4rem'}}>
      <div style={{maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem'}}>
        <div style={{fontWeight: 'bold', fontSize: '1.25rem'}}>
          Company logo
        </div>
        <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
          <div>
            <h4 style={{fontWeight: '700', marginBottom: '0.5rem'}}>COMPANY</h4>git add README.md
            <ul style={{listStyle: 'none', color: '#555'}}>
              <li>How it works</li>
              <li>Pricing</li>
              <li>Demo</li>
            </ul>
          </div>
          <div>
            <h4 style={{fontWeight: '700', marginBottom: '0.5rem'}}>RESOURCES</h4>
            <ul style={{listStyle: 'none', color: '#555'}}>
              <li>Blog post you can share</li>
              <li>Blog post you can share</li>
              <li>Blog post you can share</li>
            </ul>
          </div>
          <div>
            <h4 style={{fontWeight: '700', marginBottom: '0.5rem'}}>ABOUT</h4>
            <ul style={{listStyle: 'none', color: '#555'}}>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{textAlign: 'center', marginTop: '2rem', color: '#777'}}>
        © 2023 Company name
      </div>
    </footer>
  )
}

export default Footer
