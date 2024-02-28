import { type IStateSchema } from '@/app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScroll = (state: IStateSchema) => state?.scrollSave.scroll;
export const getScrollByPath = createSelector(
  getScroll,
  (state: IStateSchema, path: string) => path,
  (scroll, path) => scroll[ path ] || 0
)
