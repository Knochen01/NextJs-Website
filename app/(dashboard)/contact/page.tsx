import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={"/images/contact.png"}
          fill
          alt="contact image"
          className={styles.image}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" name="" id="" placeholder="Name and Surname" />
          <input type="text" name="" id="" placeholder="Email address" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone Number (Optional)"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button className={styles.btn}>SEND</button>
        </form>
      </div>
    </div>
  );
}
