import React, { forwardRef } from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({
    id, name, children, ...props
  }, ref) => (
    <div className="a-checkbox">
      <input
        className="a-checkbox_input"
        type="checkbox"
        id={id}
        name={name}
        ref={ref}
        {...props}
      />
      <label className="a-checkbox_label" htmlFor={id}>{children || ''}</label>
    </div>
  ),
);

export default Checkbox;
