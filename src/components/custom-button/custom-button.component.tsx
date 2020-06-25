import React from 'react';

import './custom-button.styles.scss';

type CustomButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = ({ children, ...props }: CustomButtonProps) => (
  <button className="custom-button" {...props}>
    {children}
  </button>
);

export default CustomButton;
