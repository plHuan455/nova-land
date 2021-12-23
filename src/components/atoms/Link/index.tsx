/* eslint-disable no-undef */
import React from 'react';
import { NavLink } from 'react-router-dom';

export interface LinkProps {
  href?: string;
  customClassName?: string;
  useExternal?: boolean;
  target?: string;
  title?: string;
  activeClassName?: string;
  handleClick?: () => void;
}

const Link: React.FC<LinkProps> = ({
  href,
  useExternal,
  title,
  customClassName = '',
  target = '_self',
  activeClassName = '',
  children,
  handleClick,
}) => {
  if (useExternal) {
    return (
      <a
        className={`a-link ${customClassName}`}
        target={target}
        href={href}
        rel="noreferrer"
        title={title}
      >
        {children}
      </a>
    );
  }
  return (
    <NavLink
      title={title}
      activeClassName={activeClassName}
      to={href || '#'}
      className={`a-link ${customClassName}`}
      onClick={handleClick}
      target={target}
    >
      {children}
    </NavLink>
  );
};

export default Link;
