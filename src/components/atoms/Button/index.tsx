/* eslint-disable react/button-has-type */
import React from 'react';

import imgLoading from 'assets/images/loading.gif';
import mapModifiers from 'utils/functions';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  modifiers?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children, modifiers, name, id, className, isLoading, disabled, type = 'button',
  onClick,
}) => (
  <button
    id={id}
    name={name}
    type={type}
    disabled={disabled || isLoading}
    onClick={onClick}
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
  isLoading: false,
};

export default Button;
