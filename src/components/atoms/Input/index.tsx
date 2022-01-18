/* eslint-disable react/require-default-props */
import React, { forwardRef } from 'react';
import { useController } from 'react-hook-form';

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
  type, error, disabled, placeholder, value, maxLength, autoComplete, name,
  onChange, onBlur, onFocus, onKeyPress,
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
        name={name}
        onKeyPress={onKeyPress}
      />
    </div>
    {
      error && <span className="a-input_message">{error}</span>
    }
  </div>
);
const Input = forwardRef(InputRef);

interface InputHookFormProps extends InputProps {
  name: string;
}

export const InputHookForm: React.FC<InputHookFormProps> = ({
  name,
  defaultValue,
  ...props
}) => {
  const {
    field: { ref, ...hookProps },
    fieldState: { error },
  } = useController({
    name: `${name}` as const,
    defaultValue: defaultValue || '',
  });

  return <Input {...hookProps} {...props} ref={ref} error={error?.message} />;
};

Input.defaultProps = {
  type: 'text',
  error: undefined,
};

export default Input;
