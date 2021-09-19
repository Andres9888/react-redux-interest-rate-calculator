import { InputNumber } from 'antd';
import { selectPrincipal, setPrincipal } from 'features/counter/interestRateCalculatorSlice';
import { useDispatch, useSelector } from 'react-redux';

export const PrincipalInput = () => {
  const initialStorePrincipal = useSelector(selectPrincipal);
  const dispatch = useDispatch();

  function onChange(principal) {
    dispatch(setPrincipal(principal));
  }

  return (
    <InputNumber
      defaultValue={initialStorePrincipal}
      formatter={(principal) => `$ ${principal}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(principal) => principal.replace(/\$\s?|(,*)/g, '')}
      size="large"
      onChange={onChange}
    />
  );
};
