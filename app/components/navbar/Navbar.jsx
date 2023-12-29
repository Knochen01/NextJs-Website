import React from "react";
import Links from "../links/Links";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className={styles.container}>
          <h5 className={styles.logo}>Marian Primak</h5>
          <Links />
        </div>
      </nav>
    </div>
  );
}
