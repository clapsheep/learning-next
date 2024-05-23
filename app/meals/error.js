"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to fetch meal data. Plase try again later.</p>
      {/* <button onClick={reset}>Try again</button> */}
    </main>
  );
}
