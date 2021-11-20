import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import useUserInfo from './hooks/useUserInfo';

import Forum from './views/Forum';
import Login from './views/Login';
import Menu from './views/Menu';
import ForumDetail from './views/Forum/ForumDetail';

import FlexColumnBox from './components/shared/FlexColumnBox';

const Wrapper = styled(FlexColumnBox)`
  align-items: center;
`;

const App = function () {
  const user = useUserInfo();
  const isLoggedIn = Boolean(user.username);

  return (
    <Wrapper>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Menu />}>
            <Route path="/profile" element={<div>Profile</div>} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/forum/:id" element={<ForumDetail />} />
          </Route>
        ) : (
          <>
            <Route path="/" element={<Login />} />
          </>
        )}
      </Routes>
    </Wrapper>
  );
};

export default App;
