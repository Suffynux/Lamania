import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.imageContainer}>
          <Image
            src="/cat1.jpg"
            alt="blog"
            fill={true}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>TITLE</h1>
          <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quis distinctio temporibus earum blanditiis nam molestiae totam officia quod voluptatum laborum eaque soluta deserunt ducimus dicta, corrupti consequatur? Ad?</p>
        </div>
      </div>

    </div>
  );
};

export default Blog;