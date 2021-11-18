import React from 'react';

import { Table } from 'react-bootstrap';

import ListHeader from '../ListHeader';
import ListItem from '../ListItem';

import Users from '../../mock/user.json';

const List = () => (
  <Table striped bordered hover>
    <ListHeader />
    <tbody>
      {Users.map((user) => <ListItem key={user.id} user={user} />)}
    </tbody>
  </Table>
);

export default List;
