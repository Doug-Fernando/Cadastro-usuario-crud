import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store';
import { addNewUser } from '../../store/store';

import Container from './style';

import UserForm from '../../components/UserForm';

import { userInitialValues } from '../../schema/userSchema';
import { ListItemType } from '../../types';

const AddUser = () => {
  const redirect = useNavigate();
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user);
  const submitForm = async (values: ListItemType) => {
    const { id, ...rest } = values;
    await dispatch(addNewUser({
      id: users.slice(-1)[0].id + 1,
      ...rest,
    }));
    alert('Usuário cadastrado com sucesso!');
    redirect('/');
  };

  useEffect(() => {
    if (users.length < 1) redirect('/');
  }, []);

  return (
    <Container>
      <h3>Adicione um novo usuário</h3>
      <UserForm user={userInitialValues} submitButton={submitForm} buttonName="Adicionar novo usuário" />
    </Container>
  );
};

export default AddUser;
