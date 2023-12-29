import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>NOT FOUND</h1>
      <h2>Yo Bro, you took the wrong turn</h2>
      <Link href="/">Click here to return Home</Link>
    </div>
  );
}
