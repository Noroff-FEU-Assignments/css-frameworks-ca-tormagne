import React from 'react';
import Container from 'react-bootstrap/Container';
import Heading from '../Heading/Heading';
import ContactForm from '../Form/ContactForm';
import Footer from '../Footer/Footer';

function Contact() {
  return (
    <>
      <div className="wrapper">
        <main>
          <Container>
            <Heading content="Submit your details" />
            <main>
              <section>
                <ContactForm />
              </section>
            </main>
          </Container>
        </main>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Contact;
