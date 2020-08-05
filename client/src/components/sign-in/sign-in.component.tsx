import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import useForm from '../../hooks/useForm';
import { RootState } from '../../store';
import { signInNormal, handleGoogleRedirect } from '../../store/user/thunks';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import { useHistory } from 'react-router-dom';
import { UserType } from '../../store/user/types';

interface SignInProps {
  error: string;
  isLoadingNormal: boolean;
  isLoadingGoogle: boolean;
  currentUser: UserType | null;
  dispatch: any;
}

type SignInState = {
  email: string;
  password: string;
};

const initialState: SignInState = {
  email: '',
  password: '',
};

const SignIn = ({
  error,
  isLoadingGoogle,
  isLoadingNormal,
  dispatch,
  currentUser,
}: SignInProps) => {
  const [formState, handleChange] = useForm<SignInState>(initialState);
  const { email, password } = formState;
  const history = useHistory();

  useEffect(() => {
    dispatch(handleGoogleRedirect(history));
  }, [dispatch, history, currentUser]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formState;
    dispatch(signInNormal(email, password));
  };

  if (isLoadingGoogle)
    return (
      <h3
        style={{
          flex: 1,
          alignSelf: 'center',
        }}
      >
        Signing you in...
      </h3>
    );

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
          style={{
            marginBottom: 20,
          }}
        />
        {error && <div className="error">{error}</div>}
        <div className="buttons">
          <CustomButton type="submit" disabled={isLoadingNormal}>
            Sign in
          </CustomButton>
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

const mapStateToProps = ({
  user: { error, isLoadingNormal, isLoadingGoogle, currentUser },
}: RootState) => ({
  error,
  isLoadingNormal,
  isLoadingGoogle,
  currentUser,
});

export default connect(mapStateToProps)(SignIn);
