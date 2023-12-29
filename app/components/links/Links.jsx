import Link from "next/link";
import React from "react";
import styles from "./links.module.css";
import NavbarLink from "../navbarlink/Navbarlink";

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

  // Temporary
  const userSession = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      {links.map((link) => (
        <NavbarLink item={link} key={link.title} />
      ))}

      {userSession ? (
        <>
          {isAdmin && (
            <NavbarLink
              item={{
                title: "Admin",
                path: "/admin",
              }}
            />
          )}
          <button className={styles.button}>Logout</button>
        </>
      ) : (
        <NavbarLink
          item={{
            title: "Login",
            path: "/login",
          }}
        />
      )}
    </div>
  );
}
