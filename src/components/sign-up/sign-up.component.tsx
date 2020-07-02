import { User } from 'firebase';
import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { auth, createUserProfile } from '../../firebase/firebase.utils';
import useForm from '../../hooks/useForm';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';

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

const SignUp = ({ history }: RouteComponentProps) => {
  const [formState, handleChange] = useForm<SignUpState>(initialState);
  const { displayName, email, password, confirmPassword } = formState;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const { displayName, email, password, confirmPassword } = formState;

    if (password !== confirmPassword) {
      return setError('Please confirm your password :)');
    }

    try {
      setLoading(true);
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user as User, { displayName });
      history.push('/');
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
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
        {error && <div className="error">{error}</div>}
        <CustomButton type="submit" disabled={loading}>
          Sign up
        </CustomButton>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
