import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { userInitialValues } from '../schema/userSchema';
import UserForm from '../components/UserForm';

describe('UserForm.tsx', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <UserForm user={userInitialValues} submitButton={() => { }} buttonName="Adicionar usuário" />
      </MemoryRouter>,
    );
  });

  it('Check if the form appear correctly', async () => {
    const form = await screen.findByRole('form');
    expect(form).toBeInTheDocument();
  });

  it('Render the first name input', async () => {
    const formFirstName = await screen.findByText('Nome');
    expect(formFirstName).toBeInTheDocument();
  });
  it('Render the last name input', async () => {
    const formLastName = await screen.findByText('Sobrenome');
    expect(formLastName).toBeInTheDocument();
  });
  it('Render the age input', async () => {
    const formAge = await screen.findByText('Idade');
    expect(formAge).toBeInTheDocument();
  });
  it('Render the district input', async () => {
    const formDistrict = await screen.findByText('Bairro');
    expect(formDistrict).toBeInTheDocument();
  });
  it('Render the street input', async () => {
    const formStreet = await screen.findByText('Endereço');
    expect(formStreet).toBeInTheDocument();
  });
  it('Render the city input', async () => {
    const formCity = await screen.findByText('Cidade');
    expect(formCity).toBeInTheDocument();
  });
  it('Render the state input', async () => {
    const formState = await screen.findByText('Estado');
    expect(formState).toBeInTheDocument();
  });
  it('Render the cpf input', async () => {
    const formcpf = await screen.findByText('CPF');
    expect(formcpf).toBeInTheDocument();
  });
  it('Render the \'submit\' and the \'back\' button', async () => {
    const submitButton = await screen.findByRole('button', { name: /adicionar usuário/i });
    expect(submitButton).toBeInTheDocument();
    const backButton = await screen.findByRole('button', { name: /voltar/i });
    expect(backButton).toBeInTheDocument();
  });
});
