// src/app/my/[askId]/page.js

export default async function EditAskPage({ params }) {
  const { askId } = await params;

  return (
    <div className="text-primary text-center mt-10">
      <h1 className="text-3xl font-bold">EditAskPage</h1>
      <p className="mt-4">Editing Ask ID: {askId}</p>
    </div>
  );
}