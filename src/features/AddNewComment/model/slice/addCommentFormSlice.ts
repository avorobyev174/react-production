import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IAddCommentFormSchema } from '../types/addCommentFormSchema';

const initialState: IAddCommentFormSchema = {
  text: '',
  error: '',
}

const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
})

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
