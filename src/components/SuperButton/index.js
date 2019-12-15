import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { darken } from 'polished';

export const SuperButton = styled(Button)`
  background: #f16550;
  border: none;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover,
  &:active,
  &:focus {
    background: ${darken(0.1, '#f16550')} !important;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08) !important;
  }
`;
