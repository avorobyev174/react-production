import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IScrollSaveSchema } from '../types/scrollSaveSchema';

const initialState: IScrollSaveSchema = {
  scroll: {},
}

const scrollSaveSlice = createSlice({
  name: 'scrollSave',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[ payload.path ] = payload.position;
    },
  },
})

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
