import { InputNumber } from 'antd';
import { selectYear, setYear } from 'features/counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export const YearInput = () => {
  const initialStoreYear = useSelector(selectYear);
  const dispatch = useDispatch();

  function onChange(year) {
    dispatch(setYear(year));
  }

  return (
    <InputNumber
      min={1}
      max={100}
      defaultValue={initialStoreYear}
      // eslint-disable-next-line react/jsx-no-bind
      onChange={onChange}
    />
  );
};
