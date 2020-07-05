// user reducer state type defs
export type UserReducerState = UserState & UserSignUpState;

export interface UserState {
  currentUser: UserType | null;
  isLoadingNormal: boolean;
  isLoadingGoogle: boolean;
  error: string;
}

export interface UserSignUpState {
  isSigningUp: boolean;
  signUpError: string;
}

export interface UserType {
  id: string;
  displayName: string;
  email: string;
  createdAt: Date;
}

// user reducer actions type defs
export const SIGN_IN_NORMAL_REQUEST = 'SIGN_IN_NORMAL_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_LOADING_GOOGLE = 'SET_LOADING_GOOGLE';

export interface SignInNormalRequestAction {
  type: typeof SIGN_IN_NORMAL_REQUEST;
}

export interface SignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS;
  payload: {
    currentUser: UserType;
  };
}

export interface SignInErorAction {
  type: typeof SIGN_IN_ERROR;
  payload: {
    error: string;
  };
}

export interface SignUpRequestAction {
  type: typeof SIGN_UP_REQUEST;
}

export interface SignUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS;
}

export interface SignUpErrorAction {
  type: typeof SIGN_UP_ERROR;
  payload: {
    error: string;
  };
}

export interface SignOutAction {
  type: typeof SIGN_OUT;
}

export interface SetLoadingGoogleAction {
  type: typeof SET_LOADING_GOOGLE;
  payload: {
    value: boolean;
  };
}

export type UserActionTypes =
  | SignInNormalRequestAction
  | SignInSuccessAction
  | SignInErorAction
  | SignOutAction
  | SetLoadingGoogleAction
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpErrorAction;
