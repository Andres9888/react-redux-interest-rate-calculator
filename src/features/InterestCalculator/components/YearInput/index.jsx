import { InputNumber } from 'antd';
import { selectYear, setYear } from 'features/InterestCalculator/interestCalculatorSlice';
import { useDispatch, useSelector } from 'react-redux';

export const YearInput = () => {
  const initialStoreYear = useSelector(selectYear);
  const dispatch = useDispatch();

  return (
    <InputNumber
      defaultValue={initialStoreYear}
      max={100}
      min={1}
      onChange={(year) => dispatch(setYear(year))}
    />
  );
};
