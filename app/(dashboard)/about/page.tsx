import React from "react";
import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.header}>About Agency</div>
          <h1 className={styles.mainH1}>
            We create Digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius nemo
            similique, nihil ratione tenetur autem quibusdam necessitatibus iste
            deserunt hic, et ad, in perspiciatis placeat unde quisquam dolores
            optio minima.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/about.png"}
            alt="about img"
            fill
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}
