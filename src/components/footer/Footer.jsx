
import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
const Footer = () => {
  return (
    
    <>
    <div className={styles.container}>

    <div className={styles.text}>© 2025 Lamania. All rights reserved.
    </div>
    <div className={styles.socailImgaes}>
      <Image src={"/1.png"} width={15} alt='facebook logo' height={15}/>
      <Image src={"/2.png"} width={15} alt='facebook logo' height={15}/>
      <Image src={"/3.png"} width={15} alt='facebook logo' height={15}/>
      <Image src={"/4.png"} width={15} alt='facebook logo' height={15}/>
  </div>

    </div>
    </>
  )
}

export default Footer