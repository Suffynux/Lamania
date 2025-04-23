import React from "react";
import styles from "./page.module.css";
import Image from "next/image";


const getData = async (id) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}` , {cache: "no-store"
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}
const BlogPost = async ({ params }) => {

  const data = await getData(params.id)
  console.log(data.id);
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.body}
          </p>
          <div className={styles.author}>
            <Image
              src={"/dummyBLog.jpg"}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Hello </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/cat1.jpg"}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit.




         
        </p>
      </div>
    </div>
  );
};

export default BlogPost;