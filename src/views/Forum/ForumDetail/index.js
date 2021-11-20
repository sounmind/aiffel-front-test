import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import ErrorMessage from '../../../components/ErrorMessage';
import FlexColumnBox from '../../../components/shared/FlexColumnBox';
import useForum from '../../../hooks/useForum';
import Heading from '../../../components/Heading';
import Button from '../../../components/Button';
import useUserDispatch from '../../../hooks/useUserDispatch';
import { deleteQuestion, toggleQuestionLike } from '../../../api';

const Wrapper = styled(FlexColumnBox)`
  gap: 10px;
`;

const ForumDetail = () => {
  const forumInfo = useForum();
  const { id } = useParams();
  const dispatch = useUserDispatch();

  let forum = forumInfo.byId[Number(id) % 5 === 0 ? 4 : (Number(id) % 5) - 1];

  console.log(forumInfo);

  if (!forum) {
    forum = Object.values(forumInfo.byId).find(
      ({ id: forumId }) => forumId === Number(id),
    );
  }

  if (!forum) {
    return <ErrorMessage>정보를 찾을 수 없습니다.</ErrorMessage>;
  }

  const {
    title,
    content,
    isLiked,
    tag: { name },
  } = forum;

  const handleClickLikeButton = async () => {
    await toggleQuestionLike({ id });

    // dispatch({ type: 'TOGGLE_LIKE', payload: id });
  };

  const handleClickDeleteButton = async () => {
    await deleteQuestion({ id });
  };

  return (
    <Wrapper>
      <Heading.Title>{title}</Heading.Title>
      <Heading.SubSubTitle>태그: {name}</Heading.SubSubTitle>
      <p>{content}</p>
      <Button onClick={handleClickLikeButton}>
        {isLiked ? '좋아요 취소' : '좋아요'}
      </Button>
      <Button onClick={handleClickDeleteButton}>삭제</Button>
    </Wrapper>
  );
};

export default ForumDetail;
