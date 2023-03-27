import {IStudent} from '@Types/IStudent';
import {ITeacher} from '@Types/ITeacher';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IUserSlice {
  user: {
    id?: string;
    username?: string;
    role?: string;
  };
  token: string;
  teacherData?: ITeacher;
  studentData?: IStudent;
}

const initialState: IUserSlice = {
  user: {
    id: '',
    username: '',
    role: '',
  },
  token: '',
  teacherData: {},
  studentData: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserSlice>) => {
      state.user = {
        id: action.payload.user.id,
        role: action.payload.user.role,
        username: action.payload.user.username,
      };
      state.token = action.payload.token;
      state.studentData = action.payload.studentData;
      state.teacherData = action.payload.teacherData;
    },
    resetUser: state => {
      state.user = {
        id: '',
        role: '',
        username: '',
      };
      state.token = '';
      state.studentData = {};
      state.teacherData = {};
    },
  },
});

export const {setUser, resetUser} = userSlice.actions;
export default userSlice.reducer;
