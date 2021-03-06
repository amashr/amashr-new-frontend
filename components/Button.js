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
  background-color: ${props => props.theme.green};
  border: 0.1rem solid ${props => props.theme.green};
  color: #fff;
  box-shadow: 0 0.8rem 0.9rem 0 rgba(96, 94, 94, 0.17);
  width: 18rem;
  padding: 1.7rem 1.5rem;

  &:hover {
    color: #fff;
    background-color: transparent;
    border-color: #fff;
    transform: translateY(-0.2rem);
  }
`;

const ButtonBorder = styled(Button)`
  border: 0.1rem solid #fff;
  color: ${props => props.theme.green} !important;
  box-shadow: 0 0.4rem 0.6rem rgba(50, 50, 93, 0.11),
    0 0.1rem 0.3rem rgba(0, 0, 0, 0.08);
  width: 18rem;
  padding: 1.7rem 1.5rem;
  background: #fff;

  &:hover {
    box-shadow: 0rem 0.8rem 0.9rem 0rem rgba(96, 94, 94, 0.17);
    transform: translateY(-0.2rem);
  }
`;

const ButtonCommon = styled(Button)`
  background-color: ${props => props.theme.green};
  z-index: 1;
  box-shadow: 0rem 0.8rem 0.9rem 0rem rgba(96, 94, 94, 0.17);
  width: 16rem;
  padding: 1.7rem 1.5rem;

  &:hover {
    color: #fff;
    transform: translateY(-0.2rem);
  }
`;

export { Button, ButtonSingin, ButtonBorderFill, ButtonBorder, ButtonCommon };
