import * as React from 'react';
import Container from './styled';

interface Props {
  size?: 'small' | 'default' | 'large' ,
  type?: 'primary' | 'secondary' | 'link',
  className?: string,
  children: React.ReactNode | never,
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  disabled?: boolean,
}

export const Button: React.FC<Props> = props => {
  const { size, type, children, onClick, className, disabled } = props;

  const propSize = size ? size : 'default';
  const propType = type ? type : 'primary';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(event);
    }
  }

  return (
    <Container
      propSize={propSize}
      propType={propType}
      className={className}
      onClick={handleClick}
      disabled={disabled}
    >
      { children }
    </Container>
  )
};

Button.defaultProps = {
  size: 'default',
  type: 'primary'
}

export default Button;
