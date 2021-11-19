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
    deleteUser: (state: any, action: PayloadAction<number>) => (
      state.filter(({ id: userId }: any) => userId !== action.payload)),
  },
});

export const { addNewUser, deleteUser } = user.actions;

export default user.reducer;
