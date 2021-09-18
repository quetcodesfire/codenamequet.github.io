import React from 'react'
import TextLoop from "react-text-loop"

import styles from '../assets/styles/Skills.module.css'

export default function Skills() {
  return(
    <section className="skills" id="skills">
      <h2 className={styles.title}>Skills</h2>
      <p className={styles.text}>
        Over the years I have gained experience in &nbsp; 
        <TextLoop className={styles.rotation} interval={1000}>
          <b>Front-End Development</b>
          <b>HTML</b>
          <b>CSS</b>
          <b>JavaScript</b>
          <b>React</b>
          <b>Typescript</b>
          <b>Gatsby</b>
          <b>Next.js</b>
          <b>Sass</b>
          <b>jQuery</b>
          <b>Bootstrap</b>
          <b>Material UI</b>
          <b>Back-End Development</b>
          <b>Node</b>
          <b>Express</b>
          <b>Python</b>
          <b>GraphQL</b>
          <b>Cloud Development</b>
          <b>AWS</b>
          <b>Severless</b>
          <b>Test Driven Development</b>
          <b>Jest</b>
          <b>Cypress</b>
          <b>React Testing Library</b>
          <b>Databases</b>
          <b>MongoDB</b>
          <b>PostgreSQL</b>
          <b>SQL</b>  
        </TextLoop>
      </p>
    </section>
  )
}