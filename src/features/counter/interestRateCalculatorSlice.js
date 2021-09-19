import { createSlice } from '@reduxjs/toolkit';
import { calculateInterest } from 'utils/calculateInterest';

const initialState = {
  principal: 100,
  newPrinciple: 0,
  interestRate: 10,
  year: 1,
};

export const interestRateCalculatorSlice = createSlice({
  name: 'interestRateCalculator',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setPrincipal: (state, action) => {
      state.principal = action.payload;
    },
    setInterestRate: (state, action) => {
      state.interestRate = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    calculateNewPrinciple: (state) => {
      const { principal, interestRate, year } = state;
      const newPrinciple = calculateInterest(principal, interestRate, year);
      state.newPrinciple = newPrinciple;
    },
  },
});

export const { setPrincipal, setInterestRate, setYear, calculateNewPrinciple } =
  interestRateCalculatorSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.interestRateCalculator.value;
export const selectPrincipal = (state) => state.interestRateCalculator.principal;
export const selectInterestRate = (state) => state.interestRateCalculator.interestRate;
export const selectYear = (state) => state.interestRateCalculator.year;
export const selectNewPrincipal = (state) => state.interestRateCalculator.newPrinciple;

export default interestRateCalculatorSlice.reducer;
