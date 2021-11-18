import React from 'react';

import Container from './style';

import AddForm from '../../components/AddUserForm';

const AddUser = () => (
  <Container>
    <h3>Adicione um novo usuário</h3>
    <AddForm />
  </Container>
);

export default AddUser;
