import React from 'react'
import TextLoop from "react-text-loop"

import styles from '../assets/styles/Achievements.module.css'

export default function Achievements() {
  return (
    <section className="achievements">
      <div className="certifications">
        <h2 className={styles.title}>Certifications</h2>
        <ul className={styles.text}>
          <li>AWS Cloud Practioner - April 2021</li>
          <li>AWS Technical Professional - October 2019</li>
        </ul>   
      </div>
      <div className="awards">
        <h2 className={styles.title}>Awards</h2>
        <p className={styles.awardText}>BisonHacks 2018 | Second Place | Where It Matters - March 2018</p>
        <p className={styles.awardText}>DevFestDC Fall 2017 Firebase Hackathon | First Place | Chord - October 2017</p>
      </div>
    </section>
  )
}