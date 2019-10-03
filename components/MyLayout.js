import { ThemeProvider } from 'styled-components';
import HeaderStyled from './Header';
import Meta from './Meta';
import GlobalStyle from './GlobalStyle';

const theme = {
  purple: 'purple',
  white: '#fff',
  maxWidth: '120rem'
};

const MyLayout = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Meta />
      <HeaderStyled />
      {props.children}
    </>
  </ThemeProvider>
);

export default MyLayout;
