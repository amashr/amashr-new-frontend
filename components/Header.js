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

const Header = props => (
  <HeaderStyled isScroll={props.isScroll}>
    <nav>
      <div className="logo-nav">
        <Link href="/">
          <a>AmasHR</a>
        </Link>
      </div>

      <ul className="navbar">
        <li className="navbar-item">
          <Link href="/">
            <a className="navbar-link">Home</a>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/about">
            <a className="navbar-link">About</a>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/services">
            <a className="navbar-link">Services</a>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/pricing">
            <a className="navbar-link">Pricing</a>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/team">
            <a className="navbar-link">Team</a>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/blog">
            <a className="navbar-link">Blog</a>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/contact">
            <a className="navbar-link">Contact</a>
          </Link>
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
