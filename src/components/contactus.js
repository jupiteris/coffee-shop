import React from 'react'
import '../css/contactus.css'

export default function ContactUs() {
  const operations = {
    Monday: '09:00–18:00',
    Tuesday: '09:00–18:00',
    Wednesday: '09:00–18:00',
    Thursday: '09:00–18:00',
    Friday: '09:00–18:00',
    Saturday: '10:00–18:00',
    Sunday: '10:00–18:00'
  }

  return (
    <div className='container'>
      <div className='contactus'>
        <a href='https://www.instagram.com/the_holy_cross_brewing_society/'>
          <div className="outer">
            <div className="inner">
            </div>
          </div>
          <h4 style={{ fontWeight: 'bold' }}>The Holy Cross Brewing Society</h4>
        </a>
        <div style={{ textAlign: 'left' }}>
          <h2>Business Hours</h2>
          {Object.keys(operations).map(day => (
            <div className='operation' key={day}>
              <h4>{day}:</h4>
              <h4>{operations[day]}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}