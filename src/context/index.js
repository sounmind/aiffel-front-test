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
  forum: {
    page: 1,
    itemsPerPage: 5,
    paginationLength: 5,
    byId: {},
  },
  view: VIEWS.LOGIN,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      // TODO: user data validation

      return {
        ...state,
        user: { ...action.payload },
        view: VIEWS.FORUM_LIST,
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

    case 'UPDATE_FORUM_INFO': {
      return {
        ...state,
        forum: {
          ...state.forum,
          page: action.payload.page,
          byId: {
            ...action.payload.forums,
          },
        },
      };
    }

    case 'RESET_SEARCHING_RESULT': {
      return {
        ...state,
        forum: {
          page: 0,
          byId: {},
        },
      };
    }

    case 'TOGGLE_LIKE': {
      const forums = Object.values(state.forum.byId);
      const target = forums.find(({ id }) => id === Number(action.payload));

      console.log(target.isLiked);

      target.isLiked = !target.isLiked;

      return {
        ...state,
        forum: {
          ...state.forum,
          byId: {
            ...forums,
          },
        },
      };
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
