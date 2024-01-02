import { getCounter } from '../getCounter/getCounter';
import { createSelector } from '@reduxjs/toolkit';
import { type ICounterSchema } from 'entites/Counter';

export const getCounterValue = createSelector(
  getCounter,
  (counter: ICounterSchema) => counter.value
)
