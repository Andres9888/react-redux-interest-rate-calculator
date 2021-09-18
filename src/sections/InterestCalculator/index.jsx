import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectNewPrincipal, calculateNewPrinciple } from 'features/counter/counterSlice';

import { PrincipalInput, InterestRateInput, YearInput } from './components';

export const InterestCalculator = () => {
  const newPrincipal = useSelector(selectNewPrincipal);
  const dispatch = useDispatch();
  return (
    <>
      <PrincipalInput />
      <InterestRateInput />
      <YearInput />
      <Total>{newPrincipal} </Total>
      <button type="button" onClick={() => dispatch(calculateNewPrinciple())} />
    </>
  );
};

const Total = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: green;
`;
