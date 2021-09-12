import React from 'react'
import TextLoop from "react-text-loop"

import styles from '../assets/styles/Skills.module.css'

export default function Skills() {
  return(
    <>
    <h2 className={styles.title}>Skills</h2>
    <p className={styles.text}>
      Over the years I have gained experience in &nbsp; 
      <TextLoop className={styles.rotation} interval={1000}>
        <b>HTML</b>
        <b>CSS</b>
        <b>JavaScript</b>
        <b>React</b>
        <b>Gatsby</b>
        <b>Next.js</b>
        <b>Node</b>
        <b>Express</b>
        <b>GraphQL</b>
        <b>Sass</b>
        <b>Bootstrap</b>
        <b>Material UI</b>
        <b>AWS</b>
        <b>Typescript</b>
        <b>Python</b>
        <b>Test Driven Development</b>
        <b>jQuery</b>
        <b>MongoDB</b>
        <b>PostgreSQL</b>
        <b>SQL</b>  
      </TextLoop>
    </p>
    </>
  )
}