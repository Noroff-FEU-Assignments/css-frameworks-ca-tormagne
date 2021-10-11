import React from 'react';
import Heading from '../heading/heading';
import Container from 'react-bootstrap/Container';
import Pagination from '../pagination/PaginationContent';
import CardContent from '../cardcollection/CardContent';
import Footer from '../footer/Footer';

function News() {
  return (
    <>
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
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default News;
