import { AppThunk } from '../thunk.type';
import {
  auth,
  createUserProfile,
  signInWithGoogle,
} from '../../firebase/firebase.utils';
import {
  clearRedirectedFromGoogle,
  isRedirectedFromGoogle,
} from '../../shared/util';
import {
  signInSuccess,
  signOut,
  setLoadingGoogle,
  signInNormalRequest,
  signInError,
  signUpRequest,
  signUpSuccess,
  signUpError,
} from './actions';
import { History } from 'history';
import { User } from 'firebase';

export const authListener = (
  setUnsubscribe: (fn: firebase.Unsubscribe) => void
): AppThunk => (dispatch) => {
  const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
    clearRedirectedFromGoogle();
    if (firebaseUser) {
      const userRef = await createUserProfile(firebaseUser);
      userRef?.onSnapshot((snapshot) => {
        const { email, createdAt, displayName } = snapshot.data() as any;
        const finalUser = {
          id: snapshot.id,
          email,
          createdAt,
          displayName,
        };
        dispatch(signInSuccess(finalUser));
      });
    }
    // else {
    //   // signing out
    //   dispatch(signOut());
    // }
  });
  setUnsubscribe(unsubscribe);
};

export const handleGoogleRedirect = (history: History): AppThunk => (
  dispatch,
  getState
) => {
  const { currentUser: user } = getState().user;

  if (isRedirectedFromGoogle()) {
    dispatch(setLoadingGoogle(true));
  }
  if (user) {
    return history.push('/');
  }
  auth
    .getRedirectResult()
    .then(function (result) {
      if (!result.user) {
        dispatch(setLoadingGoogle(false));
      }
    })
    .catch((error) => {
      dispatch(setLoadingGoogle(false));
      console.log(error);
    });
};

export const signInGoogle = (): AppThunk => () => {
  signInWithGoogle();
};

export const signInNormal = (
  email: string,
  password: string
): AppThunk => async (dispatch) => {
  dispatch(signInNormalRequest());
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    dispatch(signInError(err.message));
  }
};

export const signUp = (
  email: string,
  password: string,
  displayName: string
): AppThunk => async (dispatch) => {
  dispatch(signUpRequest());
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await createUserProfile(user as User, { displayName });
    dispatch(signUpSuccess());
  } catch (err) {
    dispatch(signUpError(err.message));
  }
};

export const signOutFirebase = (): AppThunk => (dispatch) => {
  dispatch(signOut());
  auth.signOut();
};
