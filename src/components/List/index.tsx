import React from 'react';
import { Table } from 'react-bootstrap';

import { useAppSelector } from '../../store/index';

import ListHeader from '../ListHeader';
import ListItem from '../ListItem';

const List = () => {
  const Users = useAppSelector((state) => state.user);
  return (
    <Table striped bordered hover>
      <ListHeader />
      <tbody>
        {Users.map((user) => <ListItem key={user.id} user={user} />)}
      </tbody>
    </Table>
  );
};

export default List;
