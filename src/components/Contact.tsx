import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../assets/styles/Contact.module.css'

import email from '../assets/images/mail-black-icon.png';
import github from '../assets/images/github-black-icon.png';
import linkedin from '../assets/images/linkedin-circle-icon.png';
import twitter from '../assets/images/twitter-black-icon.png';
import resume from '../assets/images/resume-black.png';

// import resumePdf from 'src/assets/files/Marquet_Reid_Resume.pdf'

export default function Contact() {
  return (
    <>
    <section className={styles.contact} id="contact">
      <h2>Contact Me</h2>
      <p>Don&apos;t hesitate to reach me at any of the links below!</p>
      <div className={styles.iconContainer}>
        <a href="mailto:marquet@marquetreid.com" rel="noreferrer" target="_blank"><Image src={email} alt="black email icon" /></a>
        <a href="http://github.com/quetcodesfire" rel="noreferrer" target="_blank"><Image src={github} alt="black github icon" /></a>
        <a href="http://linkedin.com/in/marquetreid" rel="noreferrer" target="_blank"><Image src={linkedin} alt="black linkedin icon" /></a>
        <a href="http://twitter.com/quetcodesfire" rel="noreferrer" target="_blank"><Image src={twitter} alt="black twitter icon" /></a>
      </div>
    </section>
    <section className={styles.resume} id="resume">
      <p>Also check out my resume (Click the icon below)</p>
      <a href="https://marquet-reid-portfolio-site.s3.amazonaws.com/Marquet_Reid_Resume.pdf" rel="noreferrer" target="_blank">
        <Image src={resume} alt="black resume icon" />
      </a>
    </section>
    </>
  )
}