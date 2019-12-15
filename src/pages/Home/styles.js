import styled from 'styled-components';
import { Navbar, Table } from 'react-bootstrap';
import { transparentize } from 'polished';

export const Header = styled(Navbar)`
  .basic-navbar-nav,
  form {
    width: 100%;
  }

  form {
    input {
      display: flex;
      flex: 1;
      margin-right: 16px;
    }
  }

  .super-navbar {
    font-size: 24px;
    color: #f16550;
    font-weight: bold;
    text-transform: uppercase;

    h1 {
      margin-bottom: 0;
    }
  }
`;

export const Suportbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  form {
    display: flex;
    align-items: center;
    margin-left: 16px;

    input {
      max-width: 100px;
      &:focus {
        border-color: #f16550;
        box-shadow: 0 0 0 0.2rem rgba(241, 101, 80, 0.25);
      }
    }
    input,
    span {
      margin-left: 16px;
      margin-right: 16px;
    }

    span,
    svg {
      margin-bottom: 1rem;
    }
  }

  .toLeft {
    margin-right: 16px;
  }
`;

export const Divider = styled.hr`
  margin-top: 0;
`;

export const Library = styled(Table)`
  width: 90%;
  margin: 0 auto;

  thead {
    background-color: #f16550;
    color: #fff;
  }

  tbody tr:hover {
    background-color: ${transparentize(0.8, '#f16550')};
  }

  .borderCenter {
    position: relative;
    color: #212529;
  }

  .borderCenter {
    text-decoration: none;
    padding: 0;
  }

  .borderCenter::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -3px;
    width: 50%;
    height: 1px;
    opacity: 0;
    background-color: #5778f3;
    transform: translate(-50%, 0);
    transition: all 0.3s ease-in-out;
  }

  .borderCenter:hover::after {
    width: 100%;
    opacity: 1;
  }
`;
