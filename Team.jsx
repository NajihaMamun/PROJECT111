import React from 'react'

const teamMembers = [
  {
    name: 'Full name',
    title: 'Job title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Full name',
    title: 'Job title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    name: 'Full name',
    title: 'Job title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  }
]

function Team() {
  return (
    <section style={{padding: '4rem 2rem', textAlign: 'center'}}>
      <h2 style={{fontSize: '1.75rem', fontWeight: '700', marginBottom: '1rem'}}>
        Team section
      </h2>
      <p style={{maxWidth: '600px', margin: '0 auto 3rem', color: '#555'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse adipiscing elit. Suspendisse adipiscing elit. Suspendisse adipiscing elit.
      </p>
      <div style={{display: 'flex', justifyContent: 'center', gap: '2rem'}}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{maxWidth: '250px', textAlign: 'left'}}>
            <img src={member.image} alt={member.name} style={{width: '100%', borderRadius: '8px', marginBottom: '1rem'}} />
            <h3 style={{fontWeight: '600', marginBottom: '0.25rem'}}>{member.name}</h3>
            <p style={{fontWeight: '500', color: '#777', marginBottom: '0.5rem'}}>{member.title}</p>
            <p style={{color: '#555', fontSize: '0.9rem'}}>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Team
