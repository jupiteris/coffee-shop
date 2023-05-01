import React from 'react';

export default function GMap() {
  return (
    <div className="container" id='findus'>
      <h2>Find us</h2>
      <iframe
        width="100%"
        height="100%"
        title="map"
        src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=The Holy Cross Brewing Society&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{
          minHeight: 600,
          borderRadius: 8,
          filter: 'none'
        }}
      />
    </div>
  )
}