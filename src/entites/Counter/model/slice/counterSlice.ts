import { createSlice } from '@reduxjs/toolkit'
import { type ICounterSchema } from '../types/counterSchema';

const initialState: ICounterSchema = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment (state) {
      state.value++;
    },
    decrement (state) {
      state.value--;
    }
  }
})

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
