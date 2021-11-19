import { useContext } from 'react';
import { UserStateContext } from '../context';

const useUserView = () => {
  const state = useContext(UserStateContext);

  if (!state.view) {
    throw new Error('Cannot Find User View.');
  }

  return state.view;
};

export default useUserView;
