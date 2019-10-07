import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 6rem 3rem;
  border: 0.1rem solid #ddd;
  transition: all 0.8s ease;
  max-width: 31.5%;

  &:hover {
    border: 0.1rem solid ${props => props.theme.green};
    box-shadow: 0rem 0rem 2.5rem 0rem rgba(95, 95, 95, 0.24);
    transition: all 0.4s ease;
  }

  .icon {
    background: #e3fff2;
    width: 11rem;
    height: 11rem;
    margin: 0rem auto;
    text-align: center;
    display: block;
    border-radius: 50%;
    margin-bottom: 2.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    svg {
      fill: ${props => props.theme.green};
      transform: scale(1.5);
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #151948;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: #5e629c;
  }
`;

export default Card;
