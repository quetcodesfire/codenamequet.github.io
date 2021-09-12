import React from 'react'
import Image from 'next/image';

import styles from '../assets/styles/Portfolio.module.css'

export default function Portfolio() {
  return (
    <> 
      <h2 className={styles.title}>Portfolio</h2>
      <p className={styles.intro}>
        Here are some of the projects I have been working on recently during my time
        as a profesional developer. Unfortunaely I have not had as much time for side
        projects and youtube videos as I would like, and some of my work that I have done
        can not be displayed publically. I am very proud of the work that I am able to
        display on this site at the present time and look forward to having the time to
        post more fun side projects and open source projects in the future.
      </p>
      <section className={styles.cardsContainer}>
      <div className={styles.card}>Youtube</div>
      <div className={styles.card}>Fogg</div>
      <div className={styles.card}>Cirrus</div>
      <div className={styles.card}>Stack-CMR</div>
      </section>
    </>
  )
}