import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Cimg1 from '../../images/carousel/carousel-1.jpg';
import Cimg2 from '../../images/carousel/carousel-2.jpg';
import Cimg3 from '../../images/carousel/carousel-3.jpg';
import Accord from '../accordian/Accordian';

function Home() {
  return (
    <>
      <section>
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
      </section>

      <section className="mt-4 mb-5">
        <Container>
          <h2>We do YAY things</h2>
          <p>
            Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi,
            a rutrum justo eros pretium libero. Nullam vel enim id mauris
            eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu
            sit amet, consectetur faucibus urna. Suspendisse massa diam,
            efficitur eu massa euismod, pretium lacinia magna. Donec mi orci,
            sollicitudin in luctus a, varius eget massa.
          </p>
        </Container>
      </section>
      <section>
        <Container>
          <Accord />
        </Container>
      </section>
    </>
  );
}

export default Home;
