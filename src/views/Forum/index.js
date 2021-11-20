import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchForum } from '../../api';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import Heading from '../../components/Heading';
import Input from '../../components/Input/Input';
import Loading from '../../components/Loading';
import FlexColumnBox from '../../components/shared/FlexColumnBox';
import FlexRowBox from '../../components/shared/FlexRowBox';
import { VIEWS } from '../../constants';
import useUserDispatch from '../../hooks/useUserDispatch';
import useUserView from '../../hooks/useUserView';
import ForumForm from './ForumForm';
import ForumList from './ForumList';

const Wrapper = styled(FlexColumnBox)`
  width: 100%;
  gap: 20px;
`;

const Form = styled(FlexRowBox.withComponent('form'))`
  width: 100%;
  gap: 5px;
`;

const Forum = () => {
  const view = useUserView();
  const dispatch = useUserDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSearchByKeyword = async () => {
    try {
      setIsLoading(true);
      const forums = await fetchForum({ page: 1, limit: 15 });

      const filteredForums = forums.filter(({ title, content }) => {
        return title.includes(keyword) || content.includes(keyword);
      });

      dispatch({
        type: 'UPDATE_FORUM_INFO',
        payload: { page: 1, forums: filteredForums },
      });
    } catch (error) {
      setErrorMessage('검색 중 에러가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetSearchingResult = () => {
    dispatch({ type: 'RESET_SEARCHING_RESULT' });
  };

  const handleChange = ({ target: { value } }) => {
    setKeyword(value);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Heading.Title>묻고 답하기</Heading.Title>
      <Form>
        <Input
          value={keyword}
          onChange={handleChange}
          style={{ flex: 5 }}
          placeholder="검색..."
        />
        {isLoading && <Loading />}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button onClick={handleSearchByKeyword} style={{ flex: 1 }}>
          검색
        </Button>
        <Button onClick={handleResetSearchingResult} style={{ flex: 1 }}>
          검색 결과 초기화
        </Button>
      </Form>
      {view === VIEWS.FORUM_FORM && <ForumForm />}
      {view === VIEWS.FORUM_LIST && <ForumList />}
    </Wrapper>
  );
};

export default Forum;
