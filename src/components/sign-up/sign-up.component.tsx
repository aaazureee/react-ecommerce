import React from 'react';
import { connect } from 'react-redux';
import useForm from '../../hooks/useForm';
import { RootState } from '../../store';
import { signUpError } from '../../store/user/actions';
import { signUp } from '../../store/user/thunks';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';

interface SignUpProps {
  dispatch: any;
  isSigningUp: boolean;
  signUpErrorMsg: string;
}

interface SignUpState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialState: SignUpState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = ({ dispatch, isSigningUp, signUpErrorMsg }: SignUpProps) => {
  const [formState, handleChange] = useForm<SignUpState>(initialState);
  const { displayName, email, password, confirmPassword } = formState;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = formState;

    if (password !== confirmPassword) {
      return dispatch(signUpError('Please confirm your password :)'));
    }

    dispatch(signUp(email, password, displayName));
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          id="displayName"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={email}
          label="Email"
          required
        />
        <FormInput
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={password}
          label="Password"
          required
        />
        <FormInput
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          label="Confirm Password"
          required
          style={{
            marginBottom: 20,
          }}
        />
        {signUpErrorMsg && <div className="error">{signUpErrorMsg}</div>}
        <CustomButton type="submit" disabled={isSigningUp}>
          Sign up
        </CustomButton>
      </form>
    </div>
  );
};

const mapStateToProps = ({
  user: { isSigningUp, signUpError },
}: RootState) => ({
  signUpErrorMsg: signUpError,
  isSigningUp,
});

export default connect(mapStateToProps)(SignUp);
