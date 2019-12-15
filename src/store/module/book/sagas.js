import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { fetchBooksSucess } from './actions';

function* fetchBooks({ filterTerm, dateFrom, dateTo, page, rowsPerPage }) {
  try {
    const params = {
      filterTerm,
      dateFrom,
      dateTo,
      page,
      pageSize: rowsPerPage,
    };

    if (
      (dateFrom !== '' && dateTo === '') ||
      (dateFrom === '' && dateTo !== '')
    ) {
      toast.warn('Informe data de início e fim');
    }

    if (dateFrom !== '' && dateTo) console.log(params);
    const books = yield call(api.get, `/books`, {
      params,
    });

    yield put(fetchBooksSucess(books.data));

    return books;
  } catch (error) {
    toast.error('Um erro ocorreu durante a pesquisa');

    return error;
  }
}

export default all([takeLatest('@book/FETCH_BOOKS_REQUEST', fetchBooks)]);
