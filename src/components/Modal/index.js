import React from 'react';
import { Modal } from 'react-bootstrap';
import { format, parseISO } from 'date-fns';
import { SuperButton } from '../SuperButton';

export default function MyVerticallyCenteredModal(props) {
  const {
    title,
    isbn,
    author,
    publisher,
    year,
    language,
    weight,
    dimension,
  } = props.bookDetails;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <b>ISBN</b>: {isbn}
        </p>
        <p>
          <b>Autor</b>: {author}
        </p>
        <p>
          <b>Editora</b>: {publisher}
        </p>
        <p>
          <b>Ano</b>: {year && format(parseISO(year), 'yyyy')}
        </p>
        <p>
          <b>Idioma</b>: {language}
        </p>
        <p>
          <b>Peso</b>: {weight} g
        </p>
        <p>
          <b>Dimensões</b> (c x l x a): {dimension}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <SuperButton onClick={props.onHide}>Fechar</SuperButton>
      </Modal.Footer>
    </Modal>
  );
}
