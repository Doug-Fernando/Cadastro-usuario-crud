import styled from 'styled-components';
import { Form, Button as ButtonBS } from 'react-bootstrap';

export const UserForm = styled(Form)`
  width: 50%;
  padding: 20px;
  margin-top: 20px;
`;

export const Button = styled(ButtonBS)`
  margin-top: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between
`;
