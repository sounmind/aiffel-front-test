import { useContext } from 'react';
import { UserDispatchContext } from '../context';

const useUserDispatch = () => {
  const dispatch = useContext(UserDispatchContext);

  if (!dispatch) {
    throw new Error('Cannot Find User Dispatcher.');
  }

  return dispatch;
};

export default useUserDispatch;
