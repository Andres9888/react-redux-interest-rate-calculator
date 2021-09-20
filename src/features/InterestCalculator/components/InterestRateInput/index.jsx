import { InputNumber } from 'antd';
import {
  selectInterestRate,
  setInterestRate,
} from 'features/InterestCalculator/interestCalculatorSlice';
import { useDispatch, useSelector } from 'react-redux';

export const InterestRateInput = () => {
  const initialStoreInterestRate = useSelector(selectInterestRate);
  const dispatch = useDispatch();

  return (
    <InputNumber
      defaultValue={initialStoreInterestRate}
      formatter={(interestRate) => `${interestRate}%`}
      max={100}
      min={0}
      parser={(interestRate) => interestRate.replace('%', '')}
      size="large"
      onChange={(interestRate) => dispatch(setInterestRate(interestRate))}
    />
  );
};
