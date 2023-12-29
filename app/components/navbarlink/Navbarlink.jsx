"use client";

import React from "react";
import styles from "./navbarlink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbarlink({ item }) {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
      key={item.title}
    >
      {item.title}
    </Link>
  );
}
