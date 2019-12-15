import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { chain } from 'lodash';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { Navbar, Form, Button, FormControl } from 'react-bootstrap';
import MyVerticallyCenteredModal from '../../components/Modal';
import Pager from '../../components/Pagination';
import { SuperButton } from '../../components/SuperButton';
import * as BookActions from '../../store/module/book/actions';

import { Header, Suportbar, Divider, Library } from './styles';

const Home = ({ fetchBooks, books, page, total }) => {
  const [filterTerm, setFilterTerm] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [rowsPerPage] = useState(5);
  const [modalShow, setModalShow] = useState(false);
  const [bookDetails, setBookDetails] = useState('');

  useEffect(() => {
    fetchBooks('', null, null, page, rowsPerPage);
  }, []);

  const dateBlur = () => {
    if (dateFrom !== '' && dateTo !== '' && dateFrom > dateTo) {
      setDateFrom('');
      setDateTo('');
      toast.error('Data de início deve ser inferior a data de fim');
    }
  };

  const handleSearch = e => {
    e.preventDefault();
    fetchBooks(filterTerm, dateFrom, dateTo, page, rowsPerPage);
  };

  const selectedPage = newPage => {
    fetchBooks(filterTerm, dateFrom, dateTo, newPage, rowsPerPage);
  };

  const handleModal = book => {
    setModalShow(true);
    setBookDetails(book);
  };

  return (
    <>
      <Header>
        <Navbar.Brand bsPrefix="super-navbar">
          <h1>Supero</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline onSubmit={handleSearch}>
            <FormControl
              type="text"
              placeholder="Busque livros pelo título, autor ou ISBN"
              className="ml-sm-4 mr-sm-4"
              onChange={e => setFilterTerm(e.target.value)}
              value={filterTerm}
            />
            <SuperButton variant="primary search" onClick={handleSearch}>
              Buscar
            </SuperButton>
          </Form>
        </Navbar.Collapse>
      </Header>
      <Divider />
      <Suportbar>
        <Form>
          <p>Filtrar por ano de publicação. De</p>
          <Form.Group>
            <Form.Control
              value={dateFrom}
              onChange={e => setDateFrom(e.target.value)}
              onSubmit={handleSearch}
              onBlur={() => dateBlur()}
              maxlength="4"
            ></Form.Control>
          </Form.Group>
          <FaRegCalendarAlt size={24} />
          <span>até</span>
          <Form.Group>
            <Form.Control
              value={dateTo}
              onChange={e => setDateTo(e.target.value)}
              onBlur={e => dateBlur()}
              onSubmit={handleSearch}
              maxlength="4"
            ></Form.Control>
          </Form.Group>
          <FaRegCalendarAlt size={24} />
        </Form>
        <p className="toLeft">{total} resultados encontrados</p>
      </Suportbar>
      <Divider />
      <Library responsive striped hover>
        <thead>
          <tr>
            <th>Livro</th>
            <th>ISBN</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Ano</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {chain(books)
            .map(book => (
              <tr key={book.title}>
                <td>{book.title}</td>
                <td>{book.isbn}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.year && format(parseISO(book.year), 'yyyy')}</td>
                <td>
                  <Button
                    variant="link"
                    className="borderCenter"
                    onClick={() => handleModal(book)}
                  >
                    Detalhes
                  </Button>
                </td>
              </tr>
            ))
            .value()}
        </tbody>
      </Library>
      <Pager
        total={total}
        page={page}
        rowsPerPage={rowsPerPage}
        selectedPage={selectedPage}
      />

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        bookDetails={bookDetails}
      />
    </>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(BookActions, dispatch);

const mapStateToProps = ({ book }) => book;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
