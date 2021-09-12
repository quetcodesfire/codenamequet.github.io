import Achievements from '../components/Achievements'
import Bio from '../components/Bio'
import Jumbotron from '../components/Jumbotron'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../assets/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div id="home">
      <Navbar />
      <Jumbotron />
      <Bio />
      <Portfolio />
      <Skills />
      <Achievements />
      <section className={styles.contact} id="contact">
        <h2>Contact Me</h2>
        <p>Don't hesitate to reach me at any of the links below!</p>
      </section>
      <section className={styles.contact} id="resume">
        <p>Also check out my resume (Click the icon below)</p>
      </section>
    </div>
  )
}

export default Home
