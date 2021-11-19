import { useContext } from 'react';
import { UserStateContext } from '../context';

const useUserInfo = () => {
  const state = useContext(UserStateContext);

  if (!state.user) {
    throw new Error('Cannot Find User State.');
  }

  return state.user;
};

export default useUserInfo;
