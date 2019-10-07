import styled from 'styled-components';

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 30px;
  border: 1px solid #ddd;
  transition: all 0.8s ease;

  &:hover {
    border: 1px solid #3ecf8e;
    box-shadow: 0px 0px 25px 0px rgba(95, 95, 95, 0.24);
    transition: all 0.4s ease;
  }
`;

const Card = () => (
  <CardStyled>
    <div className="icon">
      <img src="static/img/gear.svg" alt="Setting" />
    </div>
    <h2>Bootstrap</h2>
    <p>
      Share processes and data secure lona need to know basis Our team assured
      your web site is always safe.
    </p>
  </CardStyled>
);

export default Card;
