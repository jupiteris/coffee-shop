import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../css/carousel.css'

export function Slides() {
  return (
    <div className="container">
      <Carousel emulateTouch showThumbs={false} infiniteLoop>
        <div>
          <img src="images/carousel1.jpg" />
        </div>
        <div>
          <img src="images/carousel2.jpg" />
        </div>
        <div>
          <img src="images/carousel3.jpg" />
        </div>
      </Carousel>
    </div>
  )
}