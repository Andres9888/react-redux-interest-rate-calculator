/* eslint-disable */

import interestRateCalculatorReducer, {
  setPrincipal,
  setInterestRate,
  setYear,
  calculateNewPrinciple,
} from './interestRateCalculatorSlice';

describe('Interest Rate Calulator', () => {
  const initialState = {
    principal: 100,
    newPrinciple: 0,
    interestRate: 10,
    year: 1,
  };
  it('should handle initial state', () => {
    expect(interestRateCalculatorReducer(undefined, { type: 'unknown' })).toEqual({
      principal: 100,
      newPrinciple: 0,
      interestRate: 10,
      year: 1,
    });
  });

  it('should handle calculating newPrinciple', () => {
    const actual = interestRateCalculatorReducer(initialState, calculateNewPrinciple());
    expect(actual.newPrinciple).toEqual(110);
  });

  it('should handle set principle', () => {
    const actual = interestRateCalculatorReducer(initialState, setPrincipal(200));
    expect(actual.principal).toEqual(200);
  });

  // it('should handle incrementByAmount', () => {
  //   const actual = interestRateCalculatorReducer(initialState, incrementByAmount(2));
  //   expect(actual.value).toEqual(5);
  // });
});
