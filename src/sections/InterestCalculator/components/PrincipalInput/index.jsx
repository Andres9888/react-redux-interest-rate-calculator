import { InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectPrincipal, setPrincipal } from 'sections/InterestCalculator/interestCalculatorSlice';

export const PrincipalInput = () => {
  const initialStorePrincipal = useSelector(selectPrincipal);
  const dispatch = useDispatch();

  return (
    <InputNumber
      defaultValue={initialStorePrincipal}
      formatter={(principal) => `$ ${principal}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(principal) => principal.replace(/\$\s?|(,*)/g, '')}
      size="large"
      onChange={(principal) => dispatch(setPrincipal(principal))}
    />
  );
};
