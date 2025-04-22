import React from 'react';
import Image from 'next/image';
import styles from "./page.module.css";
import Button from '@/components/Button/page';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="Team collaborating on digital project"
          className={styles.img}
          priority
        />
        <div className={styles.imageText}>
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      
      <div className={styles.text}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            We are a creative studio specializing in digital experiences. Our talented team of designers, 
            developers, and marketers collaborate closely with our clients to bring ideas to life.
          </p>
        </div>
        
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            We transform digital challenges into effective solutions. Our collaborative approach
            ensures your vision is brought to life with creativity and technical excellence.
            Our services include:
          </p>
          <ul className={styles.servicesList}>
            <li>Creative Illustrations</li>
            <li>Dynamic Websites</li>
            <li>Fast and Handy Mobile Apps</li>
            <li>Custom Digital Solutions</li>
          </ul>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;