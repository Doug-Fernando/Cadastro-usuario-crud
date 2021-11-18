import React from 'react';
import { useSelector } from 'react-redux';

import { Table } from 'react-bootstrap';

import ListHeader from '../ListHeader';
import ListItem from '../ListItem';

import { RootState } from '../../store/index';

const List = () => {
  const Users = useSelector((state: RootState) => state.user);
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
