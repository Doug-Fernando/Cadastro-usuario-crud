import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

import AddUserFormGroup from '../AddUserFormGroup';

import UserForm from './style';

const AddUserForm = () => (
  <UserForm>
    <Row>
      <Col>
        <AddUserFormGroup
          controlId="formBasicFirstName"
          type="text"
          placeHolder="Digite seu nome"
          fieldName="Nome"
        />
      </Col>
      <Col>
        <AddUserFormGroup
          controlId="formBasicLastName"
          type="text"
          placeHolder="Digite seu sobrenome"
          fieldName="Sobrenome"
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <AddUserFormGroup
          controlId="formBasicAge"
          type="number"
          placeHolder="Digite sua idade"
          fieldName="Idade"
        />
      </Col>
      <Col>
        <AddUserFormGroup
          controlId="formBasicEmail"
          type="email"
          placeHolder="email@exemplo.com"
          fieldName="E-mail"
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <AddUserFormGroup
          controlId="formBasicCpf"
          type="text"
          placeHolder="000.000.000-00"
          fieldName="CPF"
        />
      </Col>
      <Col>
        <AddUserFormGroup
          controlId="formBasicState"
          fieldName="Estado"
          isSelect
        />
      </Col>
    </Row>

    <Row>
      <Col>
        <AddUserFormGroup
          controlId="formBasicStreet"
          type="text"
          placeHolder="Ex: Av um"
          fieldName="Endereço"
        />
      </Col>
      <Col>
        <AddUserFormGroup
          controlId="formBasicNumber"
          type="number"
          placeHolder="Número da casa/apartamento"
          fieldName="Número"
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <AddUserFormGroup
          controlId="formBasicDistrict"
          type="text"
          placeHolder="Digite o nome bairro"
          fieldName="Bairro"
        />
      </Col>
      <Col>
        <AddUserFormGroup
          controlId="formBasicCity"
          type="text"
          placeHolder="Digite o nome da cidade"
          fieldName="Cidade"
        />
      </Col>
    </Row>
    <Button variant="primary" type="submit">
      Adicionar usuário
    </Button>
  </UserForm>
);

export default AddUserForm;
