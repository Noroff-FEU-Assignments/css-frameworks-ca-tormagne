import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function PaginationContent() {
  return (
    <>
      <Pagination className="mt-5 mb-3">
        <Pagination.Item active="true">{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
      </Pagination>
    </>
  );
}

export default PaginationContent;
