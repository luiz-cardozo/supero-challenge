import styled from 'styled-components';
import { Pagination } from 'react-bootstrap';
import { darken } from 'polished';

export const PageList = styled(Pagination)`
  display: flex;
  justify-content: center;
  list-style-type: none;
  line-height: 1.5;
  margin-top: 24px;

  li {
    margin: 0 4px;
  }

  .sr-only {
    display: none;
  }

  .page-item.active .page-link {
    background-color: ${darken(0.1, '#f16550')};
    border-color: ${darken(0.1, '#f16550')};
  }

  a {
    text-decoration: none;
    background: #f16550;
    color: #fff;

    &:hover {
      background-color: ${darken(0.1, '#f16550')};
      color: #fff;
      font-weight: bold;
    }
  }

  span {
    padding: 8px;
  }
`;

export const PageNumber = styled(Pagination.Item)``;
