// src/app/[askId]/page.js

export default async function ResponsePage({ params }) {
    const { askId } = await params;
  
    return (
      <div className="text-primary text-center mt-10">
        <h1 className="text-3xl font-bold">ResponsePage</h1>
        <p className="mt-4">Response for Ask ID: {askId}</p>
      </div>
    );
  }