import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeUser: (state, actions) => {
      state.user = actions.payload;
      localStorage.setItem('user', JSON.stringify(actions.payload));
    },
    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { storeUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
