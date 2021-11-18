import React, { useState, useEffect } from 'react';
import { fetchUser } from './api';
import { VIEWS } from './constants';

import useUserDispatch from './hooks/useUserDispatch';
import useUserState from './hooks/useUserState';
import ForumDetail from './views/ForumDetail';
import ForumForm from './views/ForumForm';
import ForumList from './views/ForumList';
import Login from './views/Login';
import Menu from './views/Menu';

const App = function () {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState('');
  const { user, view } = useUserState();
  const dispatch = useUserDispatch();

  useEffect(() => {
    try {
      const login = async () => {
        setIsLoading(true);

        const user = await fetchUser();

        dispatch({ type: 'LOGIN', payload: user });
      };

      login();
    } catch (error) {
      console.log(error);

      setErrorMessage('유저 정보를 가져오는데 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  const isLoggedIn = Boolean(user.name);

  return (
    <>
      {isLoggedIn && <Menu />}

      <Switch>
        <Route exact path="/">
          {isLoggedIn === '' ? <Login /> : <Redirect to="/forum" />}
        </Route>

        {!isLoggedIn && <Redirect from="*" to="/" />}

        <Route exact path="/profile">
          {isLoggedIn === '' ? <Login /> : <div>Profile</div>}
        </Route>

        <Route exact path="/forum">
          {view === VIEWS.FORUM_LIST && <ForumList />}
          {view === VIEWS.FORUM_FORM && <ForumForm />}
        </Route>

        <Route exact path="/forum/:id">
          <ForumDetail />
        </Route>
      </Switch>
    </>
  );
};

export default App;
