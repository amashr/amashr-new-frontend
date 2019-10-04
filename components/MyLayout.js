import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import GlobalStyle from './GlobalStyle';

const theme = {
  purple: 'purple',
  white: '#fff',
  maxWidth: '114rem',
  mainGradient: 'linear-gradient(95deg, #5533ff 40%, #25ddf5 100%)'
};

class MyLayout extends Component {
  _isMounted = false;
  state = {
    isScroll: false
  };

  componentDidMount() {
    this._isMounted = true;
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (this._isMounted) {
      if (scrollTop > 100) {
        this.setState({ isScroll: true });
      } else {
        this.setState({ isScroll: false });
      }
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Meta />
          <Header isScroll={this.state.isScroll} />
          {this.props.children}
        </>
      </ThemeProvider>
    );
  }
}

export default MyLayout;
