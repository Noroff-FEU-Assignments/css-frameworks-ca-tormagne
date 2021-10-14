import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <div className="footer fixed-bottom">
      <Container fluid>
        <footer>
          <div className="d-flex align-items-center justify-content-center pt-5">
            <i class="fab fa-vimeo-v me-5 footer__icon"></i>
            <i class="fab fa-youtube footer__icon"></i>
          </div>
          <div className="d-flex justify-content-between mt-4 pb-4">
            <span>hello@yay.com</span>
            <span>Copyright 2020</span>
          </div>
        </footer>
      </Container>
    </div>
  );
}

export default Footer;
