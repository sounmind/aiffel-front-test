import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const theme = {
  color: {},
};

const GlobalStyles = createGlobalStyle`
  ${reset}
`;

export default GlobalStyles;
