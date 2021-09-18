import { InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { selectPrincipal, setPrincipal } from 'features/counter/counterSlice';

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
      // eslint-disable-next-line react/jsx-no-bind
      onChange={onChange}
    />
  );
};
