// src/app/login/page.js

"use client";

import { signInWithGoogle } from '../../auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      router.push('/my');
    } catch (error) {
      console.error('Error signing in with Google:', error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded text-center">
      <h1 className="text-2xl font-bold mb-6 text-primary">Login</h1>
      <button
        onClick={handleGoogleSignIn}
        className="w-full py-2 px-4 bg-primary text-primary-inverse rounded-md hover:bg-primary-dark flex items-center justify-center"
      >
        {/* Optional Google Icon */}
        <svg className="h-6 w-6 mr-2" viewBox="0 0 48 48">
          <path
            fill="#EA4335"
            d="M24 9.5c3.5 0 6.6 1.3 8.8 3.4l6.5-6.5C35.4 2.9 30 0.5 24 0.5 14.6 0.5 6.8 5.6 2.8 13l7.6 5.9c1.8-5.2 6.8-9.4 13.6-9.4z"
          />
          <path
            fill="#4285F4"
            d="M46.5 24.5c0-1.7-.1-3.4-.4-5H24v9.5h12.6c-.5 3-2.1 5.5-4.5 7.2l7.1 5.5c4.1-3.8 6.5-9.3 6.5-16.2z"
          />
          <path
            fill="#FBBC05"
            d="M10.4 28.9c-1-3-1-6.2 0-9.2L2.8 13c-3 6-3 13 0 19l7.6-5.1z"
          />
          <path
            fill="#34A853"
            d="M24 46.5c6 0 11.2-2 15-5.5l-7.1-5.5c-2 1.3-4.6 2-7.9 2-6.8 0-11.8-4.2-13.6-9.4L2.8 31c4 7.4 11.8 12.5 21.2 12.5z"
          />
          <path fill="none" d="M0 0h48v48H0z" />
        </svg>
        Sign in with Google
      </button>
    </div>
  );
}