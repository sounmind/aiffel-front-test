import React, { useState } from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import useUserDispatch from '../../hooks/useUserDispatch';
import { fetchUser } from '../../api';

import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import FlexColumnBox from '../../components/shared/FlexColumnBox';
import Input from '../../components/Input/Input';

const Wrapper = styled(FlexColumnBox)`
  gap: 10px;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

const Form = styled(FlexColumnBox.withComponent('form'))`
  gap: 10px;
  width: 100%;
`;

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState('');
  const [formData, setFormData] = useState({
    email: 'we.want.u@aiffel.com',
    password: 'passpassplz',
  });
  const dispatch = useUserDispatch();
  const nativate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const { email, password } = formData;
      const user = await fetchUser({ email, password });
      setIsLoading(false);

      if (user[0]) {
        dispatch({ type: 'LOGIN', payload: user[0] });
        nativate('/forum');
      } else {
        setErrorMessage('유저 정보가 없습니다.');
        window.alert('아이디와 비밀번호를 확인해주세요!');
      }
    } catch (error) {
      setErrorMessage('유저 정보를 가져오는데 실패했습니다.');
      setIsLoading(false);
    }
  };

  const handleChangeInput = ({ target: { name, value } }) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Wrapper>
      <Heading.Title>로그인</Heading.Title>

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <Form onSubmit={handleLogin}>
        <Input
          name="email"
          value={formData.email}
          onChange={handleChangeInput}
          placeholder="이메일을 입력해주세요"
          type="email"
        />
        <Input
          name="password"
          value={formData.password}
          onChange={handleChangeInput}
          placeholder="비밀번호"
          type="password"
        />
        {isLoading ? (
          <Loading />
        ) : (
          <Button type="submit" bgColor="yellow">
            로그인
          </Button>
        )}
      </Form>
      <Outlet />
    </Wrapper>
  );
};

export default Login;
