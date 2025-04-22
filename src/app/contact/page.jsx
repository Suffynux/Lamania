import React from 'react'
import Button from '@/components/Button/page'
import styles from "./page.module.css"
import Image from 'next/image'


const Contact = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Lets keep in Touch</h1>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image src={"/contact.png"} fill={true} alt='contact' className={styles.imgContact}/>
          </div>
          <div className={styles.formContainer}>
            <form className={styles.formContainer}>
              <input type="text" placeholder='name' className={styles.input} />
              <input type="text" placeholder='email' className={styles.input} />
              <textarea className={styles.input} cols="30" rows="10" placeholder='message'></textarea>
              <Button url={"#"} key={1} text={"Send"} className={styles.button}/>
            </form>

          
          </div>
        </div>
    </div>
  )
}

export default Contact