import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from '../assets/styles/Navbar.module.css'
import useToggle from '../hooks/useToggle'

import logo from '../assets/images/marquet-bt.png';
// Future: Add logo instead of name on left side of navbar
export default function Navbar () {
  const {changeToggle, toggle} = useToggle(false)
  return (
    <>
    <div className={styles.nav}>
      <section>
        <Link href="/" passHref>
          Marquet Reid
        </Link>
      </section>
      <section className={styles.navLinks}>
        <Link href="#about">About</Link>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#achievements">Achievements</Link>
        <Link href="#contact">Contact</Link>
        <a href="https://marquet-reid-portfolio-site.s3.amazonaws.com/Marquet_Reid_Resume.pdf" rel="noreferrer" target="_blank">Resume</a>
        <a href="http://quetcodesfire.com" rel="noreferrer" target="_blank">🔥</a>
      </section>

      <section className={styles.hamburgerMenu}>
        <div onClick={changeToggle}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </section>
    </div>
      {toggle && (
        <section className={styles.navLinksMobile}>
        <Link href="#about">About</Link>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#achievements">Achievements</Link>
        <Link href="#contact">Contact</Link>
        <a href="https://marquet-reid-portfolio-site.s3.amazonaws.com/Marquet_Reid_Resume.pdf" rel="noreferrer" target="_blank">Resume</a>
        <a href="http://quetcodesfire.com" rel="noreferrer" target="_blank">QuetCodesFire 🔥</a>
      </section>
      )}
    </>
  );
}
