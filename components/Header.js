import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

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

const Header = () => (
  <HeaderStyled id="home">
    <nav>
      <div className="logo-nav">
        <Link href="/">
          <a>AmasHR</a>
        </Link>
      </div>

      <ul className="navbar">
        <li className="navbar-item">
          <a className="navbar-link" href="#home">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#about">
            About
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#services">
            Services
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#showcase">
            Showcase
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#pricing">
            Pricing
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#team">
            Team
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#blog">
            Blog
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#contact">
            Contact
          </a>
        </li>
        <li className="navbar-item">
          <a href="#">Download</a>
        </li>
      </ul>
    </nav>
  </HeaderStyled>
);

export default Header;
