import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IUserSlice {
  username: string;
  token: string;
  userId: string;
}

const initialState: IUserSlice = {
  username: '',
  token: '',
  userId: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserSlice>) => {
      state.username = action.payload.username;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
    resetUser: state => {
      state.username = '';
      state.userId = '';
      state.token = '';
    },
  },
});

export const {setUser, resetUser} = userSlice.actions;
export default userSlice.reducer;
