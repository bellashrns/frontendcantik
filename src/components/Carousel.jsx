import React from 'react';
import { Carousel } from 'react-bootstrap';
import vbg1 from "../assets/1.png";
import vbg2 from "../assets/2.png";
import vbg3 from "../assets/3.png";

function CCarousel() {
    return (
        <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-50 mx-auto"
            src={vbg3}
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-50 mx-auto"
            src={vbg2}
            alt="Image Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-50 mx-auto"
            src={vbg1}
            alt="Image Three"
          />
        </Carousel.Item>
      </Carousel>
    );
}

export default CCarousel;