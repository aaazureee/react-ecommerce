import React from 'react';

import './custom-button.styles.scss';

type CustomButtonProps = {
  children: React.ReactNode;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = ({
  children,
  isGoogleSignIn = false,
  inverted = false,
  ...props
}: CustomButtonProps) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
