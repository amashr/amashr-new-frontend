import Link from 'next/link';

const Button = props => (
  <Link href={props.ref}>
    <a>{props.children}</a>
  </Link>
);

export default Button;
