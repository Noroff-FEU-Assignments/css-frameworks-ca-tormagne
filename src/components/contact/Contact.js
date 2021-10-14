import React from 'react';
import Container from 'react-bootstrap/Container';
import Heading from '../heading/heading';
import ContactForm from '../form/ContactForm';
import Footer from '../footer/Footer';

function Contact() {
  return (
    <>
      <div className="wrapper">
        <Container>
          <Heading content="Submit your details" />
          <main>
            <section>
              <ContactForm />
            </section>
          </main>
        </Container>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Contact;
