import React from 'react';

import './custom-button.styles.scss';

type CustomButtonProps = {
  children: React.ReactNode;
  isGoogleSignIn?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = ({
  children,
  isGoogleSignIn = false,
  ...props
}: CustomButtonProps) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
