import React from 'react';

import imgLoading from 'assets/images/loading.gif';
import mapModifiers from 'utils/functions';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  modifiers?: 'primary' | 'secondary' | 'outline';
  isSubmit?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children, modifiers, isSubmit, name, id, className, isLoading, disabled,
}) => (
  <button
    id={id}
    name={name}
    type={isSubmit ? 'submit' : 'button'}
    disabled={disabled || isLoading}
    className={mapModifiers('a-button',
      modifiers,
      className,
      isLoading && 'loading')}
  >
    {
      isLoading ? <img src={imgLoading} alt="loading" />
        : children
    }
  </button>
);

Button.defaultProps = {
  modifiers: 'primary',
  isSubmit: false,
  isLoading: false,
};

export default Button;
