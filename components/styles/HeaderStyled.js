import styled from 'styled-components';

const HeaderStyled = styled.header`
  background: purple;
  padding: 0.8rem 1.6rem;

  nav {
    max-width: 120rem;
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

      &-item {
        .navbar-link {
          text-decoration: none;
          color: #fff;
          font-size: 1.6rem;
          padding: 0.8rem 0rem;
          margin-left: 2.6rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          position: relative;
        }

        .navbar-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 0.2rem;
          background: #fff;
          transition: 0.3s;
        }

        .navbar-link:hover::before {
          width: 100%;
        }
      }
    }
  }
`;

export default HeaderStyled;