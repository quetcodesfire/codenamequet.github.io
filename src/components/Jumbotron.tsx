import React from 'react'
import Image from 'next/image';

import styles from '../assets/styles/Jumbotron.module.css'

import logo from '../assets/images/marquet-bt.png';

export default function Jumbotron() {
  return (
    <div className="jumbotron-container">
      <h1 className={styles.name}>Marquet Reid</h1>
      <h2 className={styles.title}>Full-Stack Web Developer</h2>
      <section className={styles.logo}>
        <Image src={logo} alt="Marquet's logo" />
      </section>
    </div>
  )
}