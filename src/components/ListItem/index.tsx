import React from 'react';
import { Button, TableData, TableRow } from './style';

import { ListItemType } from '../../types/index';

const ListItem = (
  {
    user: {
      id, firstName, lastName, age, cpf, address,
    },
  }: ListItemType,
) => {
  const {
    street, number, district, city, state,
  } = address;
  const fullAddress = `${street} ${number} - ${district}, ${city} - ${state}`;
  return (
    <TableRow>
      <TableData>{id}</TableData>
      <TableData>{firstName}</TableData>
      <TableData>{lastName}</TableData>
      <TableData>{age}</TableData>
      <TableData>{cpf}</TableData>
      <TableData>{fullAddress}</TableData>
      <TableData>
        <Button variant="primary">Editar</Button>
        <Button variant="danger">Excluir</Button>
      </TableData>
    </TableRow>
  );
};

export default ListItem;
