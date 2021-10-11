import React from 'react';
import Heading from '../heading/heading';
import Container from 'react-bootstrap/Container';
import Pagination from '../pagination/PaginationContent';

function News() {
  return (
    <>
      <main>
        <Container>
          <Heading content="News" />
          <Pagination />
        </Container>
      </main>
    </>
  );
}

export default News;
