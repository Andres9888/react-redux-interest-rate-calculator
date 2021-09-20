/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit';
import interestCalculatorReducer from '../sections/InterestCalculator/interestCalculatorSlice';

export const store = configureStore({
  reducer: {
    interestCalculator: interestCalculatorReducer,
  },
});
