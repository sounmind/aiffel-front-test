import { useContext } from 'react';
import { UserStateContext } from '../context';

const useUserState = () => {
  const state = useContext(UserStateContext);

  if (!state) {
    throw new Error('Cannot Find User State.');
  }

  return state;
};

export default useUserState;
