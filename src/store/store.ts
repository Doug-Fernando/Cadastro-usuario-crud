import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import userMock from '../mock/user';
import { ListItemType } from '../types';

const user = createSlice({
  name: 'users',
  initialState: userMock,
  reducers: {
    addNewUser: (
      state: any,
      action: PayloadAction<ListItemType>,
    ) => [...state, action.payload.user],
  },
});

export const { addNewUser } = user.actions;

export default user.reducer;
