/* eslint-disable */

import interestCalculatorReducer, {
  setPrincipal,
  setInterestRate,
  setYear,
  calculateNewPrinciple,
} from './interestCalculatorSlice';

describe('Interest Rate Calculator', () => {
  const initialState = {
    principal: 100,
    newPrinciple: 0,
    interestRate: 10,
    year: 1,
  };
  it('should handle initial state', () => {
    expect(interestCalculatorReducer(undefined, { type: 'unknown' })).toEqual({
      principal: 100,
      newPrinciple: 0,
      interestRate: 10,
      year: 1,
    });
  });

  it('should handle calculating newPrinciple', () => {
    const actual = interestCalculatorReducer(initialState, calculateNewPrinciple());
    expect(actual.newPrinciple).toEqual(110);
  });

  it('should handle set principle', () => {
    const actual = interestCalculatorReducer(initialState, setPrincipal(200));
    expect(actual.principal).toEqual(200);
  });

  it('should handle set interestRate', () => {
    const actual = interestCalculatorReducer(initialState, setInterestRate(30));
    expect(actual.interestRate).toEqual(30);
  });
  it('should handle set year', () => {
    const actual = interestCalculatorReducer(initialState, setYear(20));
    expect(actual.year).toEqual(20);
  });
});
