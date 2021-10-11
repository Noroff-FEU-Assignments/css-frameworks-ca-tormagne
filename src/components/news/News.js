import React from 'react';
import Heading from '../heading/heading';
import Container from 'react-bootstrap/Container';
import Pagination from '../pagination/PaginationContent';
import CardContent from '../cardcollection/CardContent';

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
          </Container>
        </section>
      </main>
    </>
  );
}

export default News;
