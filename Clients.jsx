import React from 'react'

const clients = [
  { name: 'Arise Health', logo: 'https://via.placeholder.com/100x40?text=Arise+Health' },
  { name: 'Epichient', logo: 'https://via.placeholder.com/100x40?text=Epichient' },
  { name: '2020INC', logo: 'https://via.placeholder.com/100x40?text=2020INC' },
  { name: 'THE PARK', logo: 'https://via.placeholder.com/100x40?text=THE+PARK' },
  { name: 'Pixelz.LLC', logo: 'https://via.placeholder.com/100x40?text=Pixelz.LLC' },
  { name: 'TOOGETHER', logo: 'https://via.placeholder.com/100x40?text=TOOGETHER' }
]

function Clients() {
  return (
    <section style={{padding: '2rem 0', borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}}>
      <div style={{display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto'}}>
        {clients.map((client, index) => (
          <img key={index} src={client.logo} alt={client.name} style={{height: '40px', objectFit: 'contain'}} />
        ))}
      </div>
    </section>
  )
}

export default Clients
