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
    ) => [...state, action.payload],
    deleteUser: (state: any, action: PayloadAction<number>) => (
      state.filter(({ id: userId }: any) => userId !== action.payload)),
    editUser: (state: any, action: PayloadAction<ListItemType>) => {
      const index = state.findIndex((data: ListItemType) => data.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});

export const { addNewUser, deleteUser, editUser } = user.actions;

export default user.reducer;
