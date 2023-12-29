import Link from "next/link";
import React from "react";

export default function Links() {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div>
      {links.map((link, key) => (
        <Link href={link.path} key={key}>
          {link.title}{" "}
        </Link>
      ))}
    </div>
  );
}
