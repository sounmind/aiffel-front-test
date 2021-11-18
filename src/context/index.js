import React, { createContext, useReducer } from 'react';

import { VIEWS } from '../constants';

export const UserStateContext = createContext(null);
export const UserDispatchContext = createContext(null);

const initialState = {
  user: {
    id: -1,
    email: '',
    password: '',
    username: '',
  },
  view: VIEWS.LOGIN,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      // TODO: user data validation

      return {
        ...state,
        ...action.payload,
      };
    }

    case 'LOGOUT': {
      return { user: { id: -1, email: '', password: '', username: '' } };
    }

    case 'GO_FORUM_FORM': {
      return { ...state, view: VIEWS.FORUM_FORM };
    }

    case 'GO_FORUM_DETAIL': {
      return { ...state, view: VIEWS.FORUM_DETAIL };
    }

    case 'GO_FORUM_LIST': {
      return { ...state, view: VIEWS.FORUM_LIST };
    }

    default: {
      throw new Error('Unhandled Action Dispatched.');
    }
  }
};

export const UserProvier = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};
