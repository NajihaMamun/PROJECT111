import React from 'react'

function ContactForm() {
  return (
    <section style={{padding: '4rem 2rem', maxWidth: '600px', margin: '0 auto'}}>
      <h2 style={{fontSize: '1.75rem', fontWeight: '700', marginBottom: '1rem', textAlign: 'center'}}>
        Get in touch
      </h2>
      <p style={{textAlign: 'center', marginBottom: '2rem', color: '#555'}}>
        Let us know how we can help
      </p>
      <form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          style={{padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px'}}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          style={{padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px'}}
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          style={{padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical'}}
        />
        <button type="submit" style={{backgroundColor: '#000', color: '#fff', padding: '0.75rem', borderRadius: '4px', fontWeight: '600'}}>
          SEND MESSAGE
        </button>
      </form>
    </section>
  )
}

export default ContactForm
