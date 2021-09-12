import Bio from '../components/Bio'
import Jumbotron from '../components/Jumbotron'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../assets/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar />
      <Jumbotron />
      <Bio />
      <Portfolio />
    </div>
  )
}

export default Home
