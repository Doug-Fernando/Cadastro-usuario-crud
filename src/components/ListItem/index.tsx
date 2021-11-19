import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store';

import { Button, TableData, TableRow } from './style';

import { ListItemTypeProps } from '../../types/index';
import { deleteUser } from '../../store/store';

const ListItem = (
  {
    user: {
      id, firstName, lastName, age, cpf, address,
    },
  }: ListItemTypeProps,
) => {
  const {
    street, district, city, state,
  } = address;
  const fullAddress = `${street} - ${district}, ${city} - ${state}`;
  const dispatch = useAppDispatch();
  return (
    <TableRow>
      <TableData>{id}</TableData>
      <TableData>{firstName}</TableData>
      <TableData>{lastName}</TableData>
      <TableData>{age}</TableData>
      <TableData>{cpf}</TableData>
      <TableData>{fullAddress}</TableData>
      <TableData>
        <Link to={`/editar/${id}`}><Button variant="primary">Editar </Button></Link>
        <Button variant="danger" onClick={() => dispatch(deleteUser(id))}>Excluir</Button>
      </TableData>
    </TableRow>
  );
};

export default ListItem;
