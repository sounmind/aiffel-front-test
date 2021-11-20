import styled from 'styled-components';

export default styled.input`
  width: ${({ width = '100%' }) => width};
  height: ${({ height = '100%' }) => height};
  background: ${({ background = 'transparent' }) => background};
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 5px;
`;
