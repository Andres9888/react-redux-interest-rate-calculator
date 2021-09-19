/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit';
import interestRateCalculatorReducer from '../features/counter/interestRateCalculatorSlice';

export const store = configureStore({
  reducer: {
    interestRateCalculator: interestRateCalculatorReducer,
  },
});
