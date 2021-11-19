import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import Button from './style';

import Header from '../../components/Header';
import List from '../../components/List';

const Home = () => {
  const redirect = useNavigate();
  return (
    <Container>
      <Header />
      <Button variant="primary" onClick={() => redirect('/cadastrar')}>Adicionar novo usuário</Button>
      <List />
    </Container>
  );
};

export default Home;
