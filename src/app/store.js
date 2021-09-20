/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit';
import interestCalculatorReducer from 'features/InterestCalculator/interestCalculatorSlice';

export const store = configureStore({
  reducer: {
    interestCalculator: interestCalculatorReducer,
  },
});
