import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/page";
import Image from "next/image";

const Category = ({ params }) => {
  console.log({ params });

  return (
    <div className={styles.container}>
      <h1 className={styles.paramTitle}>{params.categoryId}</h1>
      <div className={styles.items}>
        {/* First Row */}
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Creative Portfolio</h1>
            <p className={styles.desc}>Explore a curated selection of original illustrations that bring ideas to life through color, style, and emotion. Our work blends creativity with purpose, capturing stories, moods, and messages in every stroke. Whether it's digital artwork, hand-drawn sketches, or conceptual pieces, each illustration reflects a unique artistic vision crafted to inspire.</p>
            <Button url={"/portfolio"} text={"See our Work"}/>
          </div>
          <div className={styles.mainImage}>
            <Image 
              className={styles.img} 
              fill={true} 
              alt="Creative portfolio image" 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
            />
          </div>
        </div>
        
        {/* Second Row */}
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Digital Innovations</h1>
            <p className={styles.desc}>Discover cutting-edge digital solutions that transform ideas into interactive experiences. Our technology-driven approach combines modern design principles with advanced development techniques to create websites and applications that stand out in today's digital landscape. We focus on user experience, performance, and accessibility to deliver products that make a lasting impact.</p>
            <Button url={"/portfolio"} text={"View Projects"}/>
          </div>
          <div className={styles.mainImage}>
            <Image 
              className={styles.img} 
              fill={true} 
              alt="Digital innovations image" 
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" 
            />
          </div>
        </div>

        {/* Third Row */}
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Brand Strategy</h1>
            <p className={styles.desc}>We develop comprehensive brand strategies that help businesses establish strong market presence and connect with their target audience. From visual identity to messaging frameworks, our strategic approach ensures your brand communicates effectively across all touchpoints. We combine research, creativity, and business insights to craft authentic brand stories that resonate and inspire action.</p>
            <Button url={"/portfolio"} text={"Explore Strategies"}/>
          </div>
          <div className={styles.mainImage}>
            <Image 
              className={styles.img} 
              fill={true} 
              alt="Brand strategy image" 
              src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;