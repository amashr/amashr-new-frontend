import styled from 'styled-components';
import ServiceItem from './ServiceItem';

const ServicesStyled = styled.section`
  background: #f9f9f9;
  padding: 10rem 0rem;

  .services-wrapper {
    width: ${props => props.theme.maxWidth};
    margin: 0 auto;

    .services-title {
      font-size: 3.5rem;
      margin-bottom: 1.2rem;
      font-weight: 600;
      line-height: 3rem;
      text-align: center;
    }

    .services-desc {
      font-size: 1.8rem;
      color: #5e629c;
      line-height: 2.6rem;
      text-align: center;
      padding-bottom: 4rem;
    }

    .services-item-wrapper {
      background: #fff;
      display: flex;
      flex-wrap: wrap;

      & > div {
        flex-basis: 50%;
      }

      & > :nth-child(odd) {
        border-bottom: 1px solid #ededed;
        border-right: 1px solid #ededed;
      }

      & > :nth-child(even) {
        border-bottom: 1px solid #ededed;
      }
    }
  }
`;

const Services = () => (
  <ServicesStyled>
    <div className="services-wrapper">
      <h3 className="services-title">Services We Provide</h3>
      <p className="services-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br />{' '}
        eiusmod tempor incididunt ut labore et dolore.
      </p>

      <div className="services-item-wrapper">
        <ServiceItem>
          <div className="service-img">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M16 4h8v19h-24v-19h8v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2zm7 1h-22v17h22v-17zm-3 4v1h-16v-1h16zm-5-6.5c0-.133-.053-.26-.146-.354-.094-.093-.221-.146-.354-.146h-5c-.133 0-.26.053-.354.146-.093.094-.146.221-.146.354v1.5h6v-1.5z" />
            </svg>
          </div>
          <div className="service-info">
            <h4>Easy to Customize</h4>
            <p>
              Producing long lasting organic SEO results for <br /> brand of
              different kinds for more than a decade,
              <br /> we understand that’s your.
            </p>
          </div>
        </ServiceItem>

        <ServiceItem>
          <div className="service-img">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M16 4h8v19h-24v-19h8v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2zm7 1h-22v17h22v-17zm-3 4v1h-16v-1h16zm-5-6.5c0-.133-.053-.26-.146-.354-.094-.093-.221-.146-.354-.146h-5c-.133 0-.26.053-.354.146-.093.094-.146.221-.146.354v1.5h6v-1.5z" />
            </svg>
          </div>
          <div className="service-info">
            <h4>Business Template</h4>
            <p>
              Producing long lasting organic SEO results for <br /> brand of
              different kinds for more than a decade,
              <br /> we understand that’s your.
            </p>
          </div>
        </ServiceItem>
        <ServiceItem>
          <div className="service-img">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M16 4h8v19h-24v-19h8v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2zm7 1h-22v17h22v-17zm-3 4v1h-16v-1h16zm-5-6.5c0-.133-.053-.26-.146-.354-.094-.093-.221-.146-.354-.146h-5c-.133 0-.26.053-.354.146-.093.094-.146.221-.146.354v1.5h6v-1.5z" />
            </svg>
          </div>
          <div className="service-info">
            <h4>Tons of Sections</h4>
            <p>
              Producing long lasting organic SEO results for <br /> brand of
              different kinds for more than a decade,
              <br /> we understand that’s your.
            </p>
          </div>
        </ServiceItem>
        <ServiceItem>
          <div className="service-img">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M16 4h8v19h-24v-19h8v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2zm7 1h-22v17h22v-17zm-3 4v1h-16v-1h16zm-5-6.5c0-.133-.053-.26-.146-.354-.094-.093-.221-.146-.354-.146h-5c-.133 0-.26.053-.354.146-.093.094-.146.221-.146.354v1.5h6v-1.5z" />
            </svg>
          </div>
          <div className="service-info">
            <h4>Free Future Updates</h4>
            <p>
              Producing long lasting organic SEO results for <br /> brand of
              different kinds for more than a decade,
              <br /> we understand that’s your.
            </p>
          </div>
        </ServiceItem>
        <ServiceItem>
          <div className="service-img">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M16 4h8v19h-24v-19h8v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2zm7 1h-22v17h22v-17zm-3 4v1h-16v-1h16zm-5-6.5c0-.133-.053-.26-.146-.354-.094-.093-.221-.146-.354-.146h-5c-.133 0-.26.053-.354.146-.093.094-.146.221-.146.354v1.5h6v-1.5z" />
            </svg>
          </div>
          <div className="service-info">
            <h4>Premier Support</h4>
            <p>
              Producing long lasting organic SEO results for <br /> brand of
              different kinds for more than a decade,
              <br /> we understand that’s your.
            </p>
          </div>
        </ServiceItem>
        <ServiceItem>
          <div className="service-img">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M16 4h8v19h-24v-19h8v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2zm7 1h-22v17h22v-17zm-3 4v1h-16v-1h16zm-5-6.5c0-.133-.053-.26-.146-.354-.094-.093-.221-.146-.354-.146h-5c-.133 0-.26.053-.354.146-.093.094-.146.221-.146.354v1.5h6v-1.5z" />
            </svg>
          </div>
          <div className="service-info">
            <h4>Clean & Trendy Design</h4>
            <p>
              Producing long lasting organic SEO results for <br /> brand of
              different kinds for more than a decade,
              <br /> we understand that’s your.
            </p>
          </div>
        </ServiceItem>
      </div>
    </div>
  </ServicesStyled>
);

export default Services;
