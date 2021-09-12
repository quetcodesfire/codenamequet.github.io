import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../assets/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar />
      <Jumbotron />
    </div>
  )
}

export default Home
