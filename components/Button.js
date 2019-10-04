import styled from 'styled-components';

const Button = styled.a`
  font-size: 1.4rem;
  padding: 1rem 3rem;
  border-radius: 0.4rem;
  font-family: 'Rubik', sans-serif;
  letter-spacing: 0.1rem;
  font-weight: 500;
  color: ${props => props.theme.white};
  border: none;
  text-transform: uppercase;
  text-align: center;
  transition: all 0.3s ease-in-out;
  display: block;
  cursor: pointer;

  &:focus,
  &:active {
    box-shadow: none;
    outline: none;
  }
`;

const ButtonSingin = styled(Button)`
  background: #7fc9fb;
  color: ${props => props.theme.white};
  padding: 1rem 2.3rem;
  box-shadow: 0rem 0.8rem 0.9rem 0rem rgba(96, 94, 94, 0.17);

  &:hover,
  &:active,
  &:focus {
    color: ${props => props.theme.white};
    box-shadow: 0 0 0 0 rgba(96, 94, 94, 0.17);
  }
`;

const ButtonBorderFill = styled(Button)`
  background-color: #3ecf8e;
  border: 0.1rem solid #3ecf8e;
  color: #fff;
  box-shadow: 0 0.8rem 0.9rem 0 rgba(96, 94, 94, 0.17);
  width: 18rem;
  height: 5rem;
  padding: 1.5rem 1.5rem;

  &:hover {
    color: #fff;
    background-color: transparent;
    border-color: #fff;
    transform: translateY(-0.2rem);
  }
`;

const ButtonBorder = styled(Button)`
  border: 1px solid #fff;
  color: #3ecf8e !important;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  width: 180px;
  height: 50px;
  padding: 15px 15px;
  background: #fff;

  &:hover {
    box-shadow: 0px 8px 9px 0px rgba(96, 94, 94, 0.17);
    transform: translateY(-2px);
  }
`;

export { Button, ButtonSingin, ButtonBorderFill, ButtonBorder };
