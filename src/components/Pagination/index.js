import React from 'react';
import { Pagination } from 'react-bootstrap';
import { PageList, PageNumber } from './styles';

export default function Pager({ total, rowsPerPage, page, selectedPage }) {
  const numPage = total / rowsPerPage;
  const items = [];
  for (let pageNumber = 0; pageNumber < numPage; pageNumber++) {
    items.push(
      <PageNumber
        key={pageNumber}
        active={pageNumber === Number(page)}
        onClick={e => selectedPage(pageNumber)}
      >
        {pageNumber + 1}
      </PageNumber>
    );
  }

  return (
    <PageList>
      {page > 0 && (
        <>
          <Pagination.First onClick={e => selectedPage(1)} />
          <Pagination.Prev onClick={e => selectedPage(page - 1)} />
        </>
      )}
      {items}
      {page < numPage - 1 && (
        <>
          <Pagination.Next onClick={e => selectedPage(page + 1)} />
          <Pagination.Last onClick={e => selectedPage(numPage - 1)} />
        </>
      )}
    </PageList>
  );
}
