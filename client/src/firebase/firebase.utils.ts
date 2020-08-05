import firebase, { User } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { setRedirectedFromGoogle } from '../shared/util';

const firebaseConfig = {
  apiKey: 'AIzaSyAFaMJBrThj5t05HssB24JYTuPw1oPGbuk',
  authDomain: 'react-ecommerce-2105.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-2105.firebaseio.com',
  projectId: 'react-ecommerce-2105',
  storageBucket: 'react-ecommerce-2105.appspot.com',
  messagingSenderId: '477141034543',
  appId: '1:477141034543:web:fc87a769b708a79be0c8da',
  measurementId: 'G-CPGN16G128',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => {
  setRedirectedFromGoogle();
  auth.signInWithRedirect(provider);
};

export const createUserProfile = async (user: User, additionalData?: any) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
};
export default firebase;
