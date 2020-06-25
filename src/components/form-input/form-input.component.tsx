import React from 'react';

import './form-input.styles.scss';

type FormInputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ name, label, ...props }: FormInputProps) => (
  <div className="group">
    <input className="form-input" id={name} name={name} {...props} />
    <label
      className={`${
        (props.value as string).length ? 'shrink' : ''
      } form-input-label`}
      htmlFor={name}
    >
      {label}
    </label>
  </div>
);

export default FormInput;
