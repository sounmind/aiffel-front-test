import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../../components/Button';
import Heading from '../../../components/Heading';
import FlexRowBox from '../../../components/shared/FlexRowBox';
import FlexColumnBox from '../../../components/shared/FlexColumnBox';

const Wrapper = styled(FlexRowBox)`
  gap: 25px;
  padding: 20px;
  border-bottom: 1px solid lightgray;

  :hover {
    background-color: lightgray;
  }
`;

const Status = styled(FlexColumnBox)`
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 10px;
`;

const Question = ({
  info: {
    id,
    title,
    content,
    isLiked,
    tag: { name = '', color = '' },
  },
}) => {
  return (
    <Link to={`${id}`}>
      <Wrapper>
        <Status>
          <div>답변</div>
          <div>0</div>
          {isLiked && <div>👍</div>}
        </Status>
        <FlexColumnBox style={{ gap: '10px', flex: 4 }}>
          <Heading.SubTitle>{title}</Heading.SubTitle>
          <p style={{ color: 'gray' }}>
            {content.length > 200
              ? content.slice(0, 200) + ' ... more'
              : content}
          </p>
          <FlexRowBox style={{ gap: '10px' }}>
            tags: <Button style={{ backgroundColor: color }}>{name}</Button>
          </FlexRowBox>
        </FlexColumnBox>
      </Wrapper>
    </Link>
  );
};

export default Question;
