"use client"

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/posts" , {cache: "no-store"
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const data = await res.json();
    setPosts(data.posts); // Ensure you access the correct key
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Link href={`/blog/${post.id}`} key={post.id}>
          <div className={styles.item}>
            <div className={styles.imageContainer}>
              <Image
                src="/dummyBLog.jpg"
                alt="blog"
                fill={true}
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.desc}>{post.body}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
