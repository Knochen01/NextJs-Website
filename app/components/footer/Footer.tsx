import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Marian Primak</div>
      <div className={styles.text}>
        Creative Thoughts Agency © All rights reserved
      </div>
    </div>
  );
}
