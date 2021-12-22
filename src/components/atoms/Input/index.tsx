import React, { forwardRef } from 'react';

import mapModifiers from 'utils/functions';

/**
 * USEFUL PROPS IN SCOPE
 * Attribute: name, id, disabled, placeholder, value, maxLength, autoComplete,
 * Events handler: onChange, onBlur, onFocus
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'number' | 'email' | 'password';
  error?: string;
}

const InputRef: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  type, error, disabled, placeholder, value, maxLength, autoComplete,
  onChange, onBlur, onFocus,
}, ref) => (
  <div className={mapModifiers('a-input',
    type,
    error && 'error',
    disabled && 'disabled')}
  >
    <div className="a-input_wrap">
      <input
        className="a-input_input"
        type={type}
        ref={ref}
        disabled={disabled}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
    {
      error && <span className="a-input_message-error">{error}</span>
    }
  </div>
);
const Input = forwardRef(InputRef);

Input.defaultProps = {
  type: 'text',
  error: undefined,
};

export default Input;
