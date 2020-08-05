import {
  SET_LOADING_GOOGLE,
  SIGN_IN_ERROR,
  SIGN_IN_NORMAL_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  UserActionTypes,
  UserType,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
} from './types';

export const signInNormalRequest = (): UserActionTypes => ({
  type: SIGN_IN_NORMAL_REQUEST,
});

export const signInSuccess = (user: UserType): UserActionTypes => ({
  type: SIGN_IN_SUCCESS,
  payload: {
    currentUser: user,
  },
});

export const signInError = (error: string): UserActionTypes => ({
  type: SIGN_IN_ERROR,
  payload: {
    error,
  },
});

export const signOut = (): UserActionTypes => ({
  type: SIGN_OUT,
});

export const signUpRequest = (): UserActionTypes => ({
  type: SIGN_UP_REQUEST,
});

export const signUpSuccess = (): UserActionTypes => ({
  type: SIGN_UP_SUCCESS,
});

export const signUpError = (error: string): UserActionTypes => ({
  type: SIGN_UP_ERROR,
  payload: {
    error,
  },
});

export const setLoadingGoogle = (value: boolean): UserActionTypes => ({
  type: SET_LOADING_GOOGLE,
  payload: {
    value,
  },
});
