import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import { Row, Col } from 'react-bootstrap';

import AddUserFormGroup from '../AddUserFormGroup';
import { UserForm, Button, ButtonGroup } from './style';

import userSchema, { userInitialValues } from '../../schema/userSchema';

const AddUserForm = () => {
  const redirect = useNavigate();
  return (
    <Formik
      validationSchema={userSchema}
      onSubmit={() => console.log('submit')}
      initialValues={userInitialValues}
    >
      {({ handleSubmit }) => (
        <UserForm noValidate onSubmit={handleSubmit}>
          <Row>
            <Col>
              <AddUserFormGroup
                name="firstName"
                type="text"
                label="Nome"
              />
            </Col>
            <Col>
              <AddUserFormGroup
                name="lastName"
                type="text"
                label="Sobrenome"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <AddUserFormGroup
                name="age"
                type="number"
                label="Idade"
              />
            </Col>
            <Col>
              <AddUserFormGroup
                name="address.district"
                type="text"
                label="Bairro"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <AddUserFormGroup
                name="address.street"
                type="text"
                label="Endereço"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <AddUserFormGroup
                name="address.city"
                type="text"
                label="Cidade"
              />
            </Col>
            <Col>
              <AddUserFormGroup
                name="address.state"
                type="select"
                label="Estado"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <AddUserFormGroup
                name="cpf"
                type="text"
                placeholder="Ex: 000.000.000-00"
                label="CPF"
              />
            </Col>
          </Row>
          <ButtonGroup>
            <Button
              variant="success"
              type="submit"
            >
              Adicionar novo usuário
            </Button>
            <Button
              variant="dark"
              type="button"
              onClick={() => redirect('/')}
            >
              Voltar
            </Button>
          </ButtonGroup>
        </UserForm>
      )}
    </Formik>
  );
};

export default AddUserForm;
