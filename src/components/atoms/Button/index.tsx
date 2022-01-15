/* eslint-disable react/button-has-type */
import React from 'react';

import imgLoading from 'assets/images/loading.gif';
import Icon, { IconName } from 'components/atoms/Icon';
import mapModifiers from 'utils/functions';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  modifiers?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'with-icon'
    | 'outlinePaleGold'
    | 'camel'
    | 'outlineWhile'
    | 'outlineSpanishGray';
  isLoading?: boolean;
  iconName?: IconName;
}

const Button: React.FC<ButtonProps> = ({
  children, modifiers, name, id, className, isLoading, disabled, type = 'button',
  iconName,
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
      isLoading
        ? <img src={imgLoading} alt="loading" />
        : (
          <>
            {iconName && <Icon iconName={iconName} size="14" />}
            {children}
          </>
        )
    }
  </button>
);

Button.defaultProps = {
  modifiers: 'primary',
  isLoading: false,
  iconName: undefined,
};

export default Button;
