import styled from 'styled-components';
import { flexCenter } from '../shared/mixins';

export default styled.button`
  ${flexCenter}
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 5px;
  background-color: ${({ theme, bgColor }) => theme.color[bgColor]};
`;
