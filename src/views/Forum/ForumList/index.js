import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import useUserDispatch from '../../../hooks/useUserDispatch';
import useForum from '../../../hooks/useForum';
import { fetchForum } from '../../../api';
import Question from '../Question';

import FlexColumnBox from '../../../components/shared/FlexColumnBox';
import FlexRowBox from '../../../components/shared/FlexRowBox';
import ErrorMessage from '../../../components/ErrorMessage';
import Heading from '../../../components/Heading';
import Loading from '../../../components/Loading';
import Button from '../../../components/Button';

const Wrapper = styled(FlexColumnBox)`
  gap: 10px;
`;

const ForumList = () => {
  const forumInfo = useForum();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useUserDispatch();

  const handleClickMovePage = async ({ target: { name } }) => {
    const currentPage = forumInfo.page;
    const newPage = name === 'prev-page' ? currentPage - 1 : currentPage + 1;

    try {
      setIsLoading(true);
      const newForum = await fetchForum({ page: newPage });

      dispatch({
        type: 'UPDATE_FORUM_INFO',
        payload: { page: newPage, forums: newForum },
      });
    } catch (error) {
      setErrorMessage('페이지 정보를 요청하는 중 에러가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getInitialForumInfo = async () => {
      try {
        setIsLoading(true);

        const newForum = await fetchForum({ page: 1 });

        dispatch({
          type: 'UPDATE_FORUM_INFO',
          payload: { page: 1, forums: newForum },
        });
      } catch (error) {
        setErrorMessage('페이지 정보를 요청하는 중 에러가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    getInitialForumInfo();
  }, [dispatch]);

  const forums = Object.values(forumInfo.byId);
  const { page } = forumInfo;

  return (
    <Wrapper>
      <Heading.SubTitle>포럼 리스트</Heading.SubTitle>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {forums.length > 0 ? (
        forums.map((forum) => {
          return <Question key={forum.id} info={forum} />;
        })
      ) : (
        <ErrorMessage>결과가 없습니다.</ErrorMessage>
      )}
      {isLoading && <Loading />}
      <FlexRowBox style={{ gap: '20px', alignItems: 'center' }}>
        {page > 1 && (
          <Button onClick={handleClickMovePage} name="prev-page">
            이전 페이지
          </Button>
        )}
        <div>현재 페이지: {page}</div>
        <Button onClick={handleClickMovePage} name="next-page">
          다음 페이지
        </Button>
      </FlexRowBox>
    </Wrapper>
  );
};

export default ForumList;
