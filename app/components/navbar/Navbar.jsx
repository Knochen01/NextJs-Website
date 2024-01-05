import React from "react";
import Links from "../links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className={styles.container}>
          <h5 className={styles.logo}>
            <Link href={"/"}>Marian Primak</Link>
          </h5>
          <Links />
        </div>
      </nav>
    </div>
  );
}
