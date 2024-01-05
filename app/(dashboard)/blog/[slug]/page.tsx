import Image from "next/image";
import styles from "./slug.module.css";

export default function Blog() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/3278364/pexels-photo-3278364.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="image"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/725463/pexels-photo-725463.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            className={styles.avatar}
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.value}>John Doe</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published </span>
            <span className={styles.value}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          porro aperiam, modi iste a ea error amet animi mollitia voluptatibus
          repellat iusto in architecto nisi sequi nemo quos! Asperiores, quam.
        </div>
      </div>
    </div>
  );
}
