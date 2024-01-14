import { createSlice } from '@reduxjs/toolkit'
import { type IUserSchema } from '../types/user';

const initialState: IUserSchema = {

}

const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  }
})

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
