import React from 'react';
import Heading from '../Heading/heading';
import Container from 'react-bootstrap/Container';
import Pagination from '../Pagination/PaginationContent';
import CardContent from '../CardCollection/CardContent';
import Footer from '../Footer/Footer';

function News() {
  return (
    <>
      <div className="wrapper">
        <main>
          <section>
            <Container>
              <Heading content="News" />
              <Pagination />
            </Container>
          </section>
          <section>
            <Container>
              <CardContent />
              <Pagination />
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

export default News;
