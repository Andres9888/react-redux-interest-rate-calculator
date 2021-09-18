import { InputNumber } from 'antd';
import { selectInterestRate, setInterestRate } from 'features/counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export const InterestRateInput = () => {
  const initialStoreInterestRate = useSelector(selectInterestRate);
  const dispatch = useDispatch();

  function onChange(interestRate) {
    dispatch(setInterestRate(interestRate));
  }
  return (
    <InputNumber
      defaultValue={initialStoreInterestRate}
      size="large"
      min={0}
      max={100}
      formatter={(interestRate) => `${interestRate}%`}
      parser={(interestRate) => interestRate.replace('%', '')}
      // eslint-disable-next-line react/jsx-no-bind
      onChange={onChange}
    />
  );
};
