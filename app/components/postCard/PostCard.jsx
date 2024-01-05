import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/3278364/pexels-photo-3278364.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            fill
            alt=""
            className={styles.image}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A non fuga
          doloribus quidem voluptas eaque asperiores, unde suscipit
          necessitatibus quam sunt adipisci soluta minima corrupti cupiditate
          ratione illo voluptate tenetur.
        </p>
        <Link className={styles.link} href="/blog/post">
          TEST
        </Link>
      </div>
    </div>
  );
}
