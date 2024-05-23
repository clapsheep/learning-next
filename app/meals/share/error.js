"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to create meal.</p>
    </main>
  );
}
