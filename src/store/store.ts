import { createSlice } from '@reduxjs/toolkit';
import Users from '../mock/user.json';

const user = createSlice({
  name: 'users',
  initialState: Users,
  reducers: {
    increment(state) {
      return state;
    },
  },
});

export const { increment } = user.actions;

export default user.reducer;
