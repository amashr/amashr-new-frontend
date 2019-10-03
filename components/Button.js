import Link from 'next/link';
import styled from 'styled-components';

const ButtonStyled = styled.a`
  font-size: 1.4rem;
  padding: 1rem 3rem;
  border-radius: 0.4rem;
  font-family: 'Rubik', sans-serif;
  letter-spacing: 0.1rem;
  font-weight: 500;
  color: ${props => props.theme.white};
  border: none;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  display: block;
  cursor: pointer;

  &:focus,
  &:active {
    box-shadow: none;
    outline: none;
  }
`;

const ButtonSinginStyled = styled(ButtonStyled)`
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

const Button = props => (
  <Link href={props.path}>
    <ButtonStyled>{props.children}</ButtonStyled>
  </Link>
);

const ButtonSingin = props => (
  <Link href={props.path}>
    <ButtonSinginStyled>{props.children}</ButtonSinginStyled>
  </Link>
);

export { Button, ButtonSingin };
