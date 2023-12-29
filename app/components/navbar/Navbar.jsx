import React from "react";
import Links from "../links/Links";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav>
        <h5>LAMA</h5>
        <Links />
      </nav>
    </div>
  );
}

{
  /* <h5>LAMA</h5>
<ul className="flex">
  <Link href="/">
    <li>Homepage</li>
  </Link>
  <Link href="/about">
    <li>About</li>
  </Link>
  <Link href="/contact">
    <li>Contact</li>
  </Link>
  <Link href="/blog/">
    <li>Blog</li>
  </Link>
  <Link href="/logout">
    <li>Logout</li>
  </Link>
</ul> */
}
