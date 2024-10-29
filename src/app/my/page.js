// src/app/my/page.js

"use client";

import ProtectedRoute from '../../components/ProtectedRoute';

export default function MyAsksPage() {
  return (
    <ProtectedRoute>
      <div className="text-primary text-center mt-10">
        <h1 className="text-3xl font-bold">MyAsksPage</h1>
      </div>
    </ProtectedRoute>
  );
}