// src/auth.js

import { auth } from './firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

// Google Sign-In function
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// Sign out function
export const logOut = () => {
  return signOut(auth);
};

// Auth state listener
export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
