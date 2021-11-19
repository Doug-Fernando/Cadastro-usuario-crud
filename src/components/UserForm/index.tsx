import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import { Row, Col } from 'react-bootstrap';

import UserFormGroup from '../UserFormGroup';
import { Form, Button, ButtonGroup } from './style';

import userSchema from '../../schema/userSchema';

import { ListItemType } from '../../types';

interface Props {
  user: ListItemType,
  submitButton: (data: ListItemType) => void;
  buttonName: string;
}

const UserForm = ({ user, submitButton, buttonName }: Props) => {
  const redirect = useNavigate();
  return (
    <Formik
      validationSchema={userSchema}
      onSubmit={(values) => submitButton(values)}
      initialValues={user}
    >
      {({ handleSubmit }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row>
            <Col>
              <UserFormGroup
                name="firstName"
                type="text"
                label="Nome"
              />
            </Col>
            <Col>
              <UserFormGroup
                name="lastName"
                type="text"
                label="Sobrenome"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <UserFormGroup
                name="age"
                type="number"
                label="Idade"
              />
            </Col>
            <Col>
              <UserFormGroup
                name="address.district"
                type="text"
                label="Bairro"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <UserFormGroup
                name="address.street"
                type="text"
                label="Endereço"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <UserFormGroup
                name="address.city"
                type="text"
                label="Cidade"
              />
            </Col>
            <Col>
              <UserFormGroup
                name="address.state"
                type="select"
                label="Estado"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <UserFormGroup
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
              {buttonName}
            </Button>
            <Button
              variant="dark"
              type="button"
              onClick={() => redirect('/')}
            >
              Voltar
            </Button>
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
