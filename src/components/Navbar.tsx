import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../assets/styles/Navbar.module.css'

import logo from '../assets/images/marquet-bt.png';

export default function Navbar () {
  return (
    <div className={styles.nav}>
      <section>
        <Link href="/" passHref>
          Marquet Reid
          {/* <Image className={styles.logo} src={logo} alt="Marquet's logo" /> */}
        </Link>
      </section>
      <section className={styles.navLinks}>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/http://quetcodesfire.com">🔥</Link>
      </section>
    </div>
  );
}
