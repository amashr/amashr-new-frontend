import styled from 'styled-components';

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
      left: 3%;
    }
  }

  .content-wrapper {
    width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    display: flex;

    .contents {
      padding: 22rem 1.5rem 22rem 0;

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
    }

    .intro-img {
      padding: 18rem 0 0;

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
          Handcrafted Web Template
          <br /> For Business and Startups
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          <br /> dolores ea fugiat nesciunt quisquam.
        </p>
        <div className="header-button">
          <a href="#">Get started</a>
          <a href="#">Contact us</a>
        </div>
      </div>

      <div className="intro-img">
        <img src="" alt="Amas HR" />
      </div>
    </div>
  </MainStyled>
);

export default Main;
