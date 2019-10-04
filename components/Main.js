import Link from 'next/link';
import styled from 'styled-components';
import { ButtonBorderFill, ButtonBorder } from './Button';

const MainStyled = styled.main`
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0rem;
    left: 0rem;
    background: linear-gradient(95deg, #5533ff 40%, #25ddf5 100%);
    transform: skewY(-12deg);
    transform-origin: 0;
    z-index: -12;

    &-one {
      position: absolute;
      width: calc(100% / 2);
      top: 0;
      background: linear-gradient(95deg, #5533ff 40%, #25ddf5 100%);
      height: 20rem;
    }

    &-two {
      width: calc(100% / 3);
      bottom: 0;
      background: linear-gradient(95deg, #5533ff 40%, #25ddf5 100%);
      position: absolute;
      height: 15.5rem;
      left: 1.6%;
    }
  }

  .content-wrapper {
    width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    .contents {
      flex-basis: 50%;
      padding: 12rem 1.5rem 20rem 0;

      h1 {
        color: ${props => props.theme.white};
        font-size: 3.8rem;
        font-weight: 600;
        line-height: 6rem;
        margin-bottom: 2rem;
      }

      p {
        color: ${props => props.theme.white};
        font-size: 1.8rem;
        line-height: 2.6rem;
      }

      .header-button {
        margin-top: 4rem;
        display: flex;

        a:first-child {
          margin-right: 2rem;
        }
      }
    }

    .intro-img {
      flex-basis: 50%;
      padding: 7rem 0 0;

      img {
        display: block;
        height: auto;
        max-width: 100%;
      }
    }
  }
`;

const Main = () => (
  <MainStyled>
    <div className="overlay">
      <span className="overlay-one" />
      <span className="overlay-two" />
    </div>
    <div className="content-wrapper">
      <div className="contents">
        <h1 className="head-title">
          Profitability and Sustainable productivity for your Businesses
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores
          ea fugiat nesciunt quisquam.
        </p>
        <div className="header-button">
          <Link href="#">
            <ButtonBorderFill>Get started</ButtonBorderFill>
          </Link>
          <Link href="#">
            <ButtonBorder>Contact us</ButtonBorder>
          </Link>
        </div>
      </div>

      <div className="intro-img">
        <img src="static/img/main.svg" alt="Amas HR" />
      </div>
    </div>
  </MainStyled>
);

export default Main;
