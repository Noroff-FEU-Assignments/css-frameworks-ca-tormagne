import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Cimg1 from '../../images/carousel/carousel-1.jpg';
import Cimg2 from '../../images/carousel/carousel-2.jpg';
import Cimg3 from '../../images/carousel/carousel-3.jpg';

function Home() {
  return (
    <>
      <div className="">
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
    </>
  );
}

export default Home;
