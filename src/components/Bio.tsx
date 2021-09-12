import React from 'react'
import Image from 'next/image';

import styles from '../assets/styles/Bio.module.css'

import profilePicture from '../assets/images/marquet.jpg';

// Future: Add ability to view a short, medium, and long length bio
// Future: Add more recent profile picture
export default function Bio() {
  return (
    <>
      <section className="bio-header">
        <h2 className={styles.title}>About Me</h2>
        <section className={styles.profilePicture}>
          <Image src={profilePicture} alt="Marquet in front of a brick wall" />
        </section>
      </section>
      <section >
        <p className={styles.text}>
          I am a self-motivated web developer with a drive for solving problems. 
          When working on a project, I am always optimistic about the outcome due to my natural intuition.
          The combination of my focus, attention to detail, and critical thinking makes me an asset 
          to any team or environment.
        </p>
      </section>
    </>
  )
}