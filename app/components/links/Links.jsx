"use client";
import React, { useState } from "react";
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

  const [open, setOpen] = useState(false);

  // Temporary
  const userSession = true;
  const isAdmin = true;

  return (
    <div>
      <div className={styles.links}>
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
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavbarLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}
