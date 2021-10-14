import React from 'react';
import Container from 'react-bootstrap/Container';
import AccordC from '../accordian/AccordianContent';
import Footer from '../footer/Footer';
import Tab from '../tabs/tabs';
import CarouselContent from '../carousel/CarouselContent';
import Heading from '../heading/heading';

function Home() {
  return (
    <>
      <div className="wrapper">
        <main>
          <section>
            <CarouselContent />
          </section>

          <section className="mt-4 mb-5">
            <Container>
              <Heading content="We do YAY things" />
              <p>
                Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper
                mi, a rutrum justo eros pretium libero. Nullam vel enim id
                mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam
                quis arcu sit amet, consectetur faucibus urna. Suspendisse massa
                diam, efficitur eu massa euismod, pretium lacinia magna. Donec
                mi orci, sollicitudin in luctus a, varius eget massa.
              </p>
            </Container>
          </section>
          <section>
            <Container>
              <AccordC />
              <Tab />
            </Container>
          </section>
        </main>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Home;
