// src/components/AuthListener.js

"use client";

import { useEffect } from 'react';
import { onAuthStateChangedListener } from '../auth';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../store/authSlice';

export default function AuthListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        // Extract serializable properties
        const { uid, displayName, email, photoURL } = user;
        dispatch(setUser({ uid, displayName, email, photoURL }));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return null;
}