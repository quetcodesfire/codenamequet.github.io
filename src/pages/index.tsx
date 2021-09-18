import Achievements from '../components/Achievements'
import Bio from '../components/Bio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
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
    <div id={styles.home}>
      <Navbar />
      <Jumbotron />
      <Bio />
      <Portfolio />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
