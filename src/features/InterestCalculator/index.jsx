import {
  calculateNewPrinciple,
  selectNewPrincipal,
} from 'features/InterestCalculator/interestCalculatorSlice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { InterestRateInput, PrincipalInput, YearInput } from './components';

export const InterestCalculator = () => {
  const newPrincipal = useSelector(selectNewPrincipal);
  const dispatch = useDispatch();
  return (
    <>
      <PrincipalInput />
      <InterestRateInput />
      <YearInput />
      <Total>${newPrincipal}</Total>
      <button type="button" onClick={() => dispatch(calculateNewPrinciple())}>
        Calculate
      </button>
    </>
  );
};

const Total = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: green;
`;
