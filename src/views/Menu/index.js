import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';

import FlexRowBox from '../../components/shared/FlexRowBox';

const Wrapper = styled(FlexRowBox)`
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid black;
`;

const Logo = styled.img`
  height: 25px;
`;

const Menu = () => {
  const navigate = useNavigate();

  const handleClickMenu = ({ target: { value, name } }) => {
    if (name === 'forum') {
      navigate('/forum');
    }

    if (name === 'user') {
      navigate('/profile');
    }
  };

  return (
    <>
      <Wrapper>
        <Logo alt="aiffel logo" src="images/aiffel_logo.png" />
        <FlexRowBox style={{ gap: '20px' }}>
          <Button onClick={handleClickMenu} name="forum">
            Forum
          </Button>
          <Button onClick={handleClickMenu} name="user">
            User
          </Button>
        </FlexRowBox>
      </Wrapper>

      <Outlet />
    </>
  );
};

export default Menu;
