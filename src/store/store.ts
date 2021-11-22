import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListItemType } from '../types';

const user = createSlice({
  name: 'users',
  initialState: [] as ListItemType[],
  reducers: {
    saveInState: (
      state: ListItemType[],
      action: PayloadAction<ListItemType[]>,
    ): any => action.payload,
    addNewUser: (
      state: ListItemType[],
      action: PayloadAction<ListItemType>,
    ): ListItemType[] => [...state, action.payload],
    deleteUser: (state: ListItemType[], action: PayloadAction<number>) => (
      state.filter(({ id: userId }: ListItemType) => userId !== action.payload)),
    editUser: (state: ListItemType[], action: PayloadAction<ListItemType>) => {
      const index = state.findIndex((data: ListItemType) => data.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});

export const {
  addNewUser, deleteUser, editUser, saveInState,
} = user.actions;

export default user.reducer;
