import { useContext } from 'react';
import { UserStateContext } from '../context';

const useForum = () => {
  const state = useContext(UserStateContext);

  if (!state.forum) {
    throw new Error('Cannot Find Forum.');
  }

  return state.forum;
};

export default useForum;
