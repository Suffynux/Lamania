// DarkModeToggle.js
"use client";


import React, { useContext } from 'react'
import styles from "./page.module.css"
import { ThemeProvider ,ThemeContext} from '@/context/text.context';

const DarkModeToggle = () => {

    const {toggle , mode} = useContext(ThemeContext)
  return (
    
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🌕</div>
        <div className={styles.ball} style={mode === "dark" ? {right : "4px"} : {left : "2px"}}></div>
    </div>
  )
}

export default DarkModeToggle