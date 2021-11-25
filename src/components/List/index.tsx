import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import API from '../../api/users';
import { saveInState } from '../../store/store';

import { ListItemType } from '../../types';

import { useAppDispatch, useAppSelector } from '../../store/index';

import ListHeader from '../ListHeader';
import ListItem from '../ListItem';

import LoadAnimation from './styled';

const List = () => {
  const [users, setUsers] = useState<ListItemType[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const getUsersState = useAppSelector((state) => state.user);
  useEffect(() => {
    setLoading(true);
    API.getAllUsers().then((data: any) => {
      if (getUsersState.length < 1) {
        setUsers(data);
        dispatch(saveInState(data));
        setLoading(false);
        return;
      }
      setUsers(getUsersState);
      setLoading(false);
    });
  }, [getUsersState]);

  return loading ? <LoadAnimation data-testid="loading-animation" /> : (
    <Table striped bordered hover>
      <ListHeader />
      <tbody>
        {users && users.map((user: ListItemType) => <ListItem key={user.id} user={user} />)}
      </tbody>
    </Table>
  );
};

export default List;
