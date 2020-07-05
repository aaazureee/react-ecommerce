import {
  SET_LOADING_GOOGLE,
  SIGN_IN_ERROR,
  SIGN_IN_NORMAL_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  UserActionTypes,
  UserReducerState,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
} from './types';

const initialState: UserReducerState = {
  currentUser: JSON.parse(localStorage.getItem('user') as string),
  isLoadingGoogle: false,
  isLoadingNormal: false,
  error: '',
  // sign up state
  isSigningUp: false,
  signUpError: '',
};

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserReducerState => {
  switch (action.type) {
    case SIGN_IN_NORMAL_REQUEST:
      return {
        ...state,
        error: '',
        isLoadingNormal: true,
      };

    case SIGN_IN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.currentUser));
      return {
        ...state,
        currentUser: action.payload.currentUser,
        isLoadingGoogle: false,
        isLoadingNormal: false,
      };

    case SIGN_IN_ERROR:
      return {
        ...state,
        isLoadingGoogle: false,
        isLoadingNormal: false,
        error: action.payload.error,
      };

    case SIGN_UP_REQUEST:
      return {
        ...state,
        isSigningUp: true,
        signUpError: '',
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
      };

    case SIGN_UP_ERROR:
      return {
        ...state,
        isSigningUp: false,
        signUpError: action.payload.error,
      };

    case SIGN_OUT:
      localStorage.removeItem('user');
      return {
        ...state,
        currentUser: null,
      };

    case SET_LOADING_GOOGLE:
      return {
        ...state,
        isLoadingGoogle: action.payload.value,
      };

    default:
      return state;
  }
};
