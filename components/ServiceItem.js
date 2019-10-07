import styled from 'styled-components';

const ServiceItem = styled.div`
  padding: 3rem;
  transition: all 0.8s ease;
  display: flex;

  &:hover {
    box-shadow: 0rem 0rem 2.5rem 0rem rgba(95, 95, 95, 0.24);
    transition: all 0.8s ease;

    .service-img {
      background: ${props => props.theme.green};
      transition: all 0.8s ease;

      svg {
        fill: #fff;
        transition: all 0.8s ease;
      }
    }
  }

  .service-img {
    background: #e3fff2;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 0.1rem solid ${props => props.theme.green};
    margin-right: 3rem;
    margin-top: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      transform: scale(1.4);
      fill: ${props => props.theme.green};
    }
  }

  .service-info {
    h4 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;

export default ServiceItem;
