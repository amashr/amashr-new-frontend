import styled from 'styled-components';

const HeaderStyled = styled.header`
  background: ${props =>
    props.isScroll ? props.theme.mainGradient : 'transparent'};
  box-shadow: ${props =>
    props.isScroll ? '0 0 0.7rem 0.1rem rgba(0, 0, 0, 0.1)' : 'none'};
  padding: 0.8rem 1.6rem;
  transition: all 0.5s ease-in-out;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;

  nav {
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-nav a {
      font-size: 2rem;
      color: ${props => props.theme.white};
      text-decoration: none;
    }

    .navbar {
      display: flex;
      align-items: center;

      &-item {
        margin-left: 2.6rem;

        .navbar-link {
          text-decoration: none;
          color: #fff;
          font-size: 1.6rem;
          padding: 0.8rem 0rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          position: relative;

          &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 0.2rem;
            background: #fff;
            transition: 0.3s;
          }

          &:hover::before {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default HeaderStyled;
