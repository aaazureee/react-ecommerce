import React, { useEffect, useContext, useState } from 'react';
import './sign-in.styles.scss';
import useForm from '../../hooks/useForm';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

type SignInState = {
  email: string;
  password: string;
};

const initialState: SignInState = {
  email: '',
  password: '',
};

const SignIn = ({ history }: RouteComponentProps) => {
  const [formState, handleChange, reset] = useForm<SignInState>(initialState);
  const { email, password } = formState;
  const [isLoading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    console.log('its ran');
    setLoading(true);
    if (user) {
      return history.push('/');
    }
    auth
      .getRedirectResult()
      .then(function (result) {
        if (result.user) {
          // optimistic
          setUser({
            displayName: result.user.displayName as string,
          });
          return history.push('/');
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [history, user, setUser]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    reset();
    history.push('/');
  };

  if (isLoading) return <h3>Signing you in...</h3>;

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          id="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          name="password"
          id="password"
          type="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={() => {
              signInWithGoogle();
            }}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignIn);
