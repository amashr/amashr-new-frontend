import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import HeaderStyled from './styles/HeaderStyled';
import { ButtonSingin } from './Button';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

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
        <li className="navbar-item navbar-item-button">
          <Link href="#">
            <ButtonSingin>Download</ButtonSingin>
          </Link>
        </li>
      </ul>
    </nav>
  </HeaderStyled>
);

export default Header;
