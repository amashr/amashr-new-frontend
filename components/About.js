import styled from 'styled-components';
import Card from './Card';

const AboutStyled = styled.section`
  padding: 13rem 0;

  .about-wrapper {
    width: ${props => props.theme.maxWidth};
    margin: 0 auto;
  }
`;

const About = () => (
  <AboutStyled id="about">
    <div className="about-wrapper">
      <div>
        <Card />
      </div>
      <div>
        <div>
          <img src="static/img/about.svg" alt="About" />
        </div>
        <div>
          <h3>Innovative and Collaborative Human Capital Solutions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <a href="#">Download</a>
        </div>
      </div>
    </div>
  </AboutStyled>
);

export default About;
