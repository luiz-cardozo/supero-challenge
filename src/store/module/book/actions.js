export const fetchBooks = (
  filterTerm = '',
  dateFrom,
  dateTo,
  page,
  rowsPerPage
) => ({
  type: '@book/FETCH_BOOKS_REQUEST',
  filterTerm,
  dateFrom,
  dateTo,
  page,
  rowsPerPage,
});

export const fetchBooksSucess = ({ books, page, total }) => ({
  type: '@book/FETCH_BOOKS_SUCESS',
  books,
  page,
  total,
});
