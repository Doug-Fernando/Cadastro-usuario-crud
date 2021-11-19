import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Container from '../AddUser/style';

import UserForm from '../../components/UserForm';

import { useAppDispatch, useAppSelector } from '../../store';
import { editUser } from '../../store/store';
import { ListItemType } from '../../types';

const EditUser = () => {
  const [user, setUser] = useState<ListItemType | undefined>(undefined);

  const { id: paramId } = useParams();
  const redirect = useNavigate();
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user);
  useEffect(() => {
    setUser(users.find((data) => data.id === Number(paramId)));
  }, []);
  const submitForm = async (values: ListItemType) => {
    await dispatch(editUser(values));
    alert('Dados atualizados com sucesso!');
    redirect('/');
  };
  return (
    <Container>
      <h3>Editar dados do usuário</h3>
      {user
        && <UserForm user={user} submitButton={submitForm} buttonName="Salvar" />}
    </Container>
  );
};

export default EditUser;
