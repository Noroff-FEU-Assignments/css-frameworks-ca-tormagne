import React from 'react';
import Cimg1 from '../../images/carousel/carousel-1.jpg';
import Cimg2 from '../../images/carousel/carousel-2.jpg';
import Cimg3 from '../../images/carousel/carousel-3.jpg';
import Carousel from 'react-bootstrap/Carousel';

function CarouselContent() {
  return (
    <div>
      <Carousel controls={false} className="carousel-header">
        <Carousel.Item>
          <img className="d-block w-100" src={Cimg1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Cimg2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Cimg3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselContent;
