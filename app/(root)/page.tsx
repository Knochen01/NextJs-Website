import React from "react";
import styles from "./root.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nulla
          blanditiis, sit, veritatis nesciunt necessitatibus at ullam architecto
          cupiditate autem illum corporis magnam, error praesentium recusandae
          minus ipsum fugiat doloribus.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            className={styles.brandImage}
            src="/images/brands.png"
            alt=""
            width={600}
            height={80}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.brandImage}
          src="/images/hero.gif"
          alt="Hero GIF"
          fill
        />
      </div>
    </div>
  );
}
