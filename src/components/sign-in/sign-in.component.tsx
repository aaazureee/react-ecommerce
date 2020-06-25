import React from 'react';
import './sign-in.styles.scss';
import useForm from '../../hooks/useForm';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

type SignInState = {
  email: string;
  password: string;
};

const initialState: SignInState = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formState, handleChange, reset] = useForm<SignInState>(initialState);
  const { email, password } = formState;
  console.log(formState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    reset();
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
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

        <CustomButton type="submit">Sign in</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
