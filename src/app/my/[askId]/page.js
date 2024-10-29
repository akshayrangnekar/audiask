// src/app/my/[askId]/page.js

"use client";

import ProtectedRoute from '../../../components/ProtectedRoute';

export default async function EditAskPage({ params }) {
  const { askId } = await params;

  return (
    <ProtectedRoute>
      <div className="text-primary text-center mt-10">
        <h1 className="text-3xl font-bold">EditAskPage</h1>
        <p className="mt-4">Editing Ask ID: {askId}</p>
      </div>
    </ProtectedRoute>
  );
}