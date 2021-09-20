import { InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectYear, setYear } from 'sections/InterestCalculator/interestCalculatorSlice';

export const YearInput = () => {
  const initialStoreYear = useSelector(selectYear);
  const dispatch = useDispatch();

  function onChange(year) {
    dispatch(setYear(year));
  }

  return <InputNumber defaultValue={initialStoreYear} max={100} min={1} onChange={onChange} />;
};
