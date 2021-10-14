import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TabImg1 from '../../images/tab/tab-1.jpg';
import TabImg2 from '../../images/tab/tab-2.jpg';
import TabImg3 from '../../images/tab/tab-3.jpg';
import Container from 'react-bootstrap/Container';

function tabs() {
  return (
    <div className="d-none d-md-block">
      <Tabs defaultActiveKey="first" className="mb-3">
        <Tab eventKey="first" title="First">
          <Container className="py-5 d-flex px-5">
            <div>
              <img src={TabImg1} className="me-5" alt="" />
            </div>
            <div className="d-flex flex-column justify-content-between">
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.{' '}
              </p>
              <div>
                <span className="me-3 mt-3 card__color">SHARE</span>
                <i class="fab fa-facebook-f me-3 mt-3 card__color"></i>
                <i class="fab fa-twitter mt-3 card__color"></i>
              </div>
            </div>
          </Container>
        </Tab>
        <Tab eventKey="second" title="Second">
          <Container className="py-5 d-flex px-5">
            <div>
              <img src={TabImg2} className="me-5" alt="" />
            </div>
            <div className="d-flex flex-column justify-content-between">
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.{' '}
              </p>
              <div>
                <span className="me-3 mt-3 card__color">SHARE</span>
                <i class="fab fa-facebook-f me-3 mt-3 card__color"></i>
                <i class="fab fa-twitter mt-3 card__color"></i>
              </div>
            </div>
          </Container>
        </Tab>
        <Tab eventKey="third" title="Third">
          <Container className="py-5 d-flex px-5">
            <div>
              <img src={TabImg3} className="me-5" alt="" />
            </div>
            <div className="d-flex flex-column justify-content-between">
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.{' '}
              </p>
              <div>
                <span className="me-3 mt-3 card__color">SHARE</span>
                <i class="fab fa-facebook-f me-3 mt-3 card__color"></i>
                <i class="fab fa-twitter mt-3 card__color"></i>
              </div>
            </div>
          </Container>
        </Tab>
      </Tabs>
    </div>
  );
}

export default tabs;
